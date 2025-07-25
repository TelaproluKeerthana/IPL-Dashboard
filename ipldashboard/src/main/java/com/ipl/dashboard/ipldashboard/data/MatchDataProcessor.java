package com.ipl.dashboard.ipldashboard.data;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import com.ipl.dashboard.ipldashboard.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

  private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);
  private static final DateTimeFormatter ISO = DateTimeFormatter.ISO_DATE;
  
  @Override
  public Match process(final MatchInput matchInput) throws Exception{
    Match match = new Match();
    match.setId(Long.parseLong(matchInput.getId()));
    match.setDate(LocalDate.parse(matchInput.getDate(), ISO));
    match.setCity(matchInput.getCity());
    
  
    
    match.setPlayerOfMatch(matchInput.getPlayer_of_match());
    match.setVenue(matchInput.getVenue());

    // setting the teams based on the innings order
    String firstInningsTeam, secondInningsTeam; 

    if("bat".equals(matchInput.getToss_decision())){
        firstInningsTeam = matchInput.getToss_winner();
        secondInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    }
    else{
        secondInningsTeam = matchInput.getToss_winner();
        firstInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    }

    match.setTeam1(firstInningsTeam);
    match.setTeam2(secondInningsTeam);

    match.setTossWinner(matchInput.getToss_winner());
    match.setTossDecision(matchInput.getToss_decision());
    
    // Add the missing matchWinner field
    match.setMatchWinner(matchInput.getWinner());
    
    match.setResult(matchInput.getResult());
    match.setResultMargin(matchInput.getResult_margin());
    match.setUmpire1(matchInput.getUmpire1());
    match.setUmpire2(matchInput.getUmpire2());

    log.info("Processing match: {} vs {} on {}", firstInningsTeam, secondInningsTeam, matchInput.getDate());

    return match;

  }

}
