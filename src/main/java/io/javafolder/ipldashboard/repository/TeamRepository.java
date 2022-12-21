package io.javafolder.ipldashboard.repository;


import org.springframework.data.repository.CrudRepository;

import io.javafolder.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}
