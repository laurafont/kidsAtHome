require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "mvp_resources",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists resources; create table resources(id int auto_increment primary key, name text null, description varchar(255) null, thumbnail text null, indoor tinyint(1) null, age float null, category_id int null, type_id int null, constraint resources_category_id_fk foreign key (category_id) references category (id), constraint resources_type_id_fk foreign key (type_id) references type (id)));";

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `resources` was successful!");

  });

  let sql =
    "DROP TABLE if exists category; create table category(id int auto_increment primary key, name text null, description varchar(255) null, thumbnail text null));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `category` was successful!");

  });

  let sql =
    "DROP TABLE if exists type; create table type(id int auto_increment primary key, name text null););";

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `type` was successful!");

  });

  con.end();
});
