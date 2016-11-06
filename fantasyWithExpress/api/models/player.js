class Player {
  constructor({ id, name, team, inj, pos_1, pos_2, pos_3, mins, n_goal, p_goal, p_miss, sht_on, sht_off, sht_post, fld, fld_p, off, ast, key, own, ylw, ylw2, red, fl, fl_p, tck, intr, head, blk, clr, n_con, p_con, o_con, p_sav, c_sav, pn_sav }) {
    this.playerInfo = {
      playerId: id,
      playerName: name,
      playerTeam: team,
      injured: inj,
      pos1: pos_1,
      pos2: pos_2,
      pos3: pos_3,
    };
    this.playerStats = {
      totalMins: parseInt(mins, 10),
      normalGoals: parseInt(n_goal, 10),
      penaltyGoals: parseInt(p_goal, 10),
      penaltyMisses: parseInt(p_miss, 10),
      shotsOnTarget: parseInt(sht_on, 10),
      shotsOffTarget: parseInt(sht_off, 10),
      shotsOffPost: parseInt(sht_post, 10),
      foulsDrawn: parseInt(fld, 10),
      penaltiesDrawn: parseInt(fld_p, 10),
      offsides: parseInt(off, 10),
      assists: parseInt(ast, 10),
      keyPasses: parseInt(key, 10),
      ownGoals: parseInt(own, 10),
      yellowCards: parseInt(ylw, 10),
      secondYellows: parseInt(ylw2, 10),
      straightReds: parseInt(red, 10),
      foulsConceded: parseInt(fl, 10),
      penaltiesConceded: parseInt(fl_p, 10),
      tackles: parseInt(tck, 10),
      interceptions: parseInt(intr, 10),
      headersWon: parseInt(head, 10),
      shotsBlocked: parseInt(blk, 10),
      clearances: parseInt(clr, 10),
      normalGoalsConceded: parseInt(n_con, 10),
      penaltyGoalsConceded: parseInt(p_con, 10),
      ownGoalsConceded: parseInt(o_con, 10),
      savesParried: parseInt(p_sav, 10),
      savesCaught: parseInt(c_sav, 10),
      penaltiesSaved: parseInt(pn_sav, 10),
    };
  }
}

module.exports = Player;
