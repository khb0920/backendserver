"use strict";

const db = require("../config/db");

class Product {
    constructor(body) {
        this.body = body;

    }
     async registerproduct(){
            return new Promise((resolve, reject) => {
                const query = "INSERT INTO Product(ProductName, ProductDetail, ProductImg, ProductCompo, ProductPrice, ProductSLevel, ProductAge) VALUES(?, ?, ?, ?, ?, ?, ?);";
                db.query(
                    query,
                    this.body,
                    (err) => {
                        if(err) reject(`${err}`);
                        resolve({ success: true});
                });
            });
        }
     async showproduct(){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM Product;";
            db.query(
                query,
                (err, data) => {
                    if(err) reject(`${err}`);
                    resolve(data);
            });
        });
    }
    async showdetailproduct(){
        //console.log(this.body.membernum);
        return new Promise((resolve, reject) => {
            const query1 = `SELECT Review.ProductNum, productName, ReviewNum, ReviewTitle, ReviewDetail, ReviewScore, ReviewImg, Gender, Age_range, Nickname FROM Review, Product, Member 
            WHERE Review.ProductNum = Product.ProductNum AND Review.MemberNum = Member.MemberNum AND Review.ProductNum='${this.body.productnum}';`;
            //const query2 = `SELECT * FROM Review WHERE Review.ProductNum=${this.body.productnum};`;
            db.query(
                query1,
                (err, data) => {
                    if(err) reject(`${err}`);
                    resolve(data); //이름 나이대 성별만 리뷰에나오게 그러면 review테이블에 membername gender age 추가 
            });
        });
    }
    }




module.exports = Product;
