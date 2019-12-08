
## 通过url查询数据  get请求
将graphiql中的查询语句赋值给query就可以完成查询

### 通过url请求全部数据
http://localhost:4000/graphql?query={infos%20{%20_id%20height%20weight}}


### url请求单个数据
http://localhost:4000/graphql?query={info(id:%225de52fe9342c6643012fb736%22)%20{%20_id%20height%20weight%20}}

