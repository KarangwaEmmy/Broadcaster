/* eslint-disable class-methods-use-this */
import db from '../db/config';
import sql from '../db/sqlQueries';
import sqlQueries from '../db/sqlQueries';


class RedFlag {
  async postRedFlag(data) {
    const insertRedflag = 'INSERT INTO redflag(createdby, title, type, location, status, images, videos, comment) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    try {
      const { rows } = await db.query(insertRedflag, [
        data.createdBy,
        data.title,
        data.type,
        data.location,
        data.status,
        data.images,
        data.videos,
        data.comment,
      ]);
      console.log(rows);
      return rows;
    } catch (err) {
      return false;
    }
  }

  //  Find one
  async findOne(id) {
    const values = [id];
    try {
      const { rows } = await db.query(sql.getOneRedfalg, values);
      const oneFlag = rows[0];
      if (oneFlag) {
        return oneFlag;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  // Fetch all users
  async allRedFlags() {
    const allflags = await db.query(sql.allRedFlag);
    return allflags;
  }
  //  Delete a specific red flag

  async deleteredFlag(id) {
    const values = [id];
    const flagIndex = await db.query(sql.deleteFlag, values);
    if (flagIndex) {
      return true;
    }
    return false;
  }

  // Update Incident
  async updateLocation(location, id) {
    const { rows } = await db.query(sqlQueries.updateLocation, [location, id]);
    return rows;
  }

  async updateComment(comment, id) {
    const { rows } = await db.query(sqlQueries.updateComment, [comment, id]);
    return rows;
  }
}
export default new RedFlag();
