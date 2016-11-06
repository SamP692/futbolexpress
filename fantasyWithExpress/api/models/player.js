class Player {
  constructor({ id, name, team, inj, pos_1, pos_2, pos_3, mins, n_goal, p_goal, p_miss, sht_on, sht_off, sht_post, fld, fld_p, off, ast, key, own, ylw, ylw2, red, fl, fl_p, tck, intr, head, blk, clr, n_con, p_con, o_con, p_sav, c_sav, pn_sav }) {
    this.id = id;
    this.name = name;
    this.team = team;
    this.injured = inj;
    this.pos1 = pos_1;
    this.pos2 = pos_2;
    this.pos3 = pos_3;
    this.mins = mins;
    this.normalGoals = n_goal;
    this.penaltyGoals = p_goal;
    this.penaltyMisses = p_miss;
    this.shotsOnTarget = sht_on;
    this.shotsOffTarget = sht_off;
    this.shotsOffPost = sht_post;
    this.foulsDrawn = fld;
    this.penaltiesDrawn = fld_p;
    this.offsides = off;
    this.assists = ast;
    this.keyPasses = key;
    this.ownGoals = own;
    this.yellowCards = ylw;
    this.secondYellows = ylw2;
    this.straightReds = red;
    this.foulsConceded = fl;
    this.penaltiesConceded = fl_p;
    this.tackles = tck;
    this.interceptions = intr;
    this.headersWon = head;
    this.shotsBlocked = blk;
    this.clearances = clr;
    this.normalGoalsConceded = n_con;
    this.penaltyGoalsConceded = p_con;
    this.ownGoalsConceded = o_con;
    this.savesParried = p_sav;
    this.savesCaught = c_sav;
    this.penaltiesSaved = pn_sav;
  }
}

module.exports = Player;
