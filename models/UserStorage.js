"use strict";

const db = require("../config/db");

class UserStorage {

     static getUserInfo(kakao_account) {
          
                return new Promise((resolve, reject) => {
                const query = "SELECT * FROM Member WHERE nickname = ?;";
                db.query(query, [kakao_account], (err, data) => {
                if (err) reject(err);
                resolve(data[0]);   
             });
             });
        }

        static async save(userInfo){
            return new Promise((resolve, reject) => {
                const query = "INSERT INTO Member(nickname, age_range, birthday, email) VALUES(?, ?, ?, ?);";
            db.query(
                query,
                [userInfo.nickname, userInfo.age_range, userInfo.birth, userInfo.email],
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
            });
                
        }
    }
    
    
    module.exports = UserStorage;