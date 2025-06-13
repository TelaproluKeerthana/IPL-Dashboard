package com.ipl.dashboard.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.ipl.dashboard.ipldashboard.model.Team;
import java.util.List;


public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByTeamName(String teamName);
}
