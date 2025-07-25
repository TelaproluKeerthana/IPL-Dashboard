package com.ipl.dashboard.ipldashboard.repository;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ipl.dashboard.ipldashboard.model.Match;

public interface MatchRepository extends CrudRepository<Match, Long>{

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName ) and m.date between :startdate and :enddate order by date desc")
    List<Match> getMatchesByTeamBetweenDates(@Param("teamName") String teamName,
    @Param("startdate") LocalDate startdate,
    @Param("enddate") LocalDate endDate);
   
    // List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(String teamName1,  LocalDate date1,
    // LocalDate date2, String teamName2, LocalDate datee1, LocalDate datee2);

    default List<Match> findLatestMatchesbyTeam(String teamName, int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, 4));
    }


}
