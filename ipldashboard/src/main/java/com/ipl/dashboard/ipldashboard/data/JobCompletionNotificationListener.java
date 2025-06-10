package com.ipl.dashboard.ipldashboard.data;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

  private final JdbcTemplate jdbcTemplate;

  public JobCompletionNotificationListener(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public void afterJob(JobExecution jobExecution) {
    if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("✔ JOB FINISHED – verifying results");

      jdbcTemplate.query(
          "SELECT team1, team2, date FROM match",
          (rs, rowNum) -> String.format(
              "Team 1: %-25s  Team 2: %-25s  Date: %s",
              rs.getString("team1"),
              rs.getString("team2"),
              rs.getDate("date").toLocalDate())
      ).forEach(System.out::println);
    }
  }
}
