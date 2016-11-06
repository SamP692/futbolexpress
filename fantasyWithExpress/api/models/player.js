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
      totalMins: mins,
      normalGoals: n_goal,
      penaltyGoals: p_goal,
      penaltyMisses: p_miss,
      shotsOnTarget: sht_on,
      shotsOffTarget: sht_off,
      shotsOffPost: sht_post,
      foulsDrawn: fld,
      penaltiesDrawn: fld_p,
      offsides: off,
      assists: ast,
      keyPasses: key,
      ownGoals: own,
      yellowCards: ylw,
      secondYellows: ylw2,
      straightReds: red,
      foulsConceded: fl,
      penaltiesConceded: fl_p,
      tackles: tck,
      interceptions: intr,
      headersWon: head,
      shotsBlocked: blk,
      clearances: clr,
      normalGoalsConceded: n_con,
      penaltyGoalsConceded: p_con,
      ownGoalsConceded: o_con,
      savesParried: p_sav,
      savesCaught: c_sav,
      penaltiesSaved: pn_sav,
    };
  }
}

module.exports = Player;
