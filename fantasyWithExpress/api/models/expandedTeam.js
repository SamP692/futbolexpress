class ExpandedTeam {
  constructor({ id, name, u_id, gk_id, fbl_id, fbr_id, cbl_id, cbr_id, wl_id, wr_id, cml_id, cmr_id, sl_id, sr_id, bn1_id, bn2_id, bn3_id, bn4_id, bn5_id, bn6_id, bn7_id, in1_id, in2_id, in3_id }) {
    // this.id = id;
    // this.name = name;
    // this.user = u_id;
    this.teamInfo = {
      teamId: id,
      teamName: name,
      owner: u_id,
    };
    // this.gk = gk_id;
    // this.fbl = fbl_id;
    // this.fbr = fbr_id;
    // this.cbl = cbl_id;
    // this.cbr = cbr_id;
    // this.wl = wl_id;
    // this.wr = wr_id;
    // this.cml = cml_id;
    // this.cmr = cmr_id;
    // this.sl = sl_id;
    // this.sr = sr_id;
    // this.bn1 = bn1_id;
    // this.bn2 = bn2_id;
    // this.bn3 = bn3_id;
    // this.bn4 = bn4_id;
    // this.bn5 = bn5_id;
    // this.bn6 = bn6_id;
    // this.bn7 = bn7_id;
    // this.in1 = in1_id;
    // this.in2 = in2_id;
    // this.in3 = in3_id;
    this.playerInfo = {
      gk: gk_id,
      fbl: fbl_id,
      fbr: fbr_id,
      cbl: cbl_id,
      cbr: cbr_id,
      wl: wl_id,
      wr: wr_id,
      cml: cml_id,
      cmr: cmr_id,
      sl: sl_id,
      sr: sr_id,
      bn1: bn1_id,
      bn2: bn2_id,
      bn3: bn3_id,
      bn4: bn4_id,
      bn5: bn5_id,
      bn6: bn6_id,
      bn7: bn7_id,
      in1: in1_id,
      in2: in2_id,
      in3: in3_id,
    };
  }
}

module.exports = ExpandedTeam;
