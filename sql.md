# Sql笔记

### 插入
 ` INSERT INTO "table_name" (cols_name) values("value") `

### 更新

 ` UPDATE "TABLE_NAME" SET "value"  where value = ? `

### 查找

` SELECT ? FROM TABLE_NAME IF ?  `

### 删除

` DELETE FROM “users” WHERE “users“.“id“ = 1”  `


## 选择条件 

- limit: ` SELECT * FROM user limit 3 `
- where: `SELECT * FROM user where gender = "男" and name ="Sebastian"`
- DESC: `SELECT * FROM user GROUP BY id DESC, name DESC`
- LIKE `SELECT * FROM user where prove like "_西" // _ 懒惰匹配一个字符， %贪婪匹配 `
- IN  `SELECT * FROM user where prove IN("江西","福建")`

## 数据库配置

- **primary**：*主键，只有一个*
- **auto_increment** *自动增加*
- **ENUM**：*设置选项*


## 其他

- 一个汉字= 2字节 
- 一个英文字母 = 1字节
- 中文标点 = 3字节。
- 英文标点 = 1字节。