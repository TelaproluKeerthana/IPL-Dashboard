package com.ipl.dashboard.ipldashboard.controller;

import org.springframework.web.bind.annotation.RestController;

import com.ipl.dashboard.ipldashboard.model.Match;
import com.ipl.dashboard.ipldashboard.model.Team;
import com.ipl.dashboard.ipldashboard.repository.MatchRepository;
import com.ipl.dashboard.ipldashboard.repository.TeamRepository;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@CrossOrigin
public class TeamController {
    
    private TeamRepository teamRepository;
    private MatchRepository matchRepository;
    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository){
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team")
    public Iterable<Team> getAllTeams() {
        return this.teamRepository.findAll();
    }
    

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchesbyTeam(teamName, 4));

        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        
        return this.matchRepository.getMatchesByTeamBetweenDates(teamName,  startDate, endDate);
    }

    @GetMapping("/stats/overview")
    public Map<String, Object> getStatsOverview() {
        List<Team> teams = (List<Team>) this.teamRepository.findAll();
        
        int totalTeams = teams.size();
        long totalMatches = teams.stream().mapToLong(Team::getTotalMatches).sum();
        long totalWins = teams.stream().mapToLong(Team::getTotalWins).sum();
        double bestWinRate = teams.stream()
            .mapToDouble(team -> (double) team.getTotalWins() / team.getTotalMatches() * 100)
            .max()
            .orElse(0.0);
        long mostWins = teams.stream().mapToLong(Team::getTotalWins).max().orElse(0);
        
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalTeams", totalTeams);
        stats.put("totalMatches", totalMatches);
        stats.put("totalWins", totalWins);
        stats.put("bestWinRate", Math.round(bestWinRate));
        stats.put("mostWins", mostWins);
        
        return stats;
    }

    @GetMapping("/stats/leaderboard")
    public List<Map<String, Object>> getLeaderboard(@RequestParam(defaultValue = "wins") String sortBy) {
        List<Team> teams = (List<Team>) this.teamRepository.findAll();
        
        return teams.stream()
            .sorted((a, b) -> {
                switch (sortBy) {
                    case "winRate":
                        double rateA = (double) a.getTotalWins() / a.getTotalMatches();
                        double rateB = (double) b.getTotalWins() / b.getTotalMatches();
                        return Double.compare(rateB, rateA);
                    case "matches":
                        return Long.compare(b.getTotalMatches(), a.getTotalMatches());
                    default: // wins
                        return Long.compare(b.getTotalWins(), a.getTotalWins());
                }
            })
            .map(team -> {
                Map<String, Object> teamStats = new HashMap<>();
                teamStats.put("id", team.getId());
                teamStats.put("teamName", team.getTeamName());
                teamStats.put("totalMatches", team.getTotalMatches());
                teamStats.put("totalWins", team.getTotalWins());
                teamStats.put("totalLosses", team.getTotalMatches() - team.getTotalWins());
                teamStats.put("winRate", Math.round((double) team.getTotalWins() / team.getTotalMatches() * 1000) / 10.0);
                return teamStats;
            })
            .collect(Collectors.toList());
    }

    
    
}
