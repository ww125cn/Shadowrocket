var body = $response.body;
var obj = JSON.parse(body);

obj={
  "testGroup" : "A",
  "src" : "BIND",
  "isPaymentMember" : true,
  "pic" : "https:\/\/piccn.ihuaben.com\/pic\/user\/202305\/0621\/1683378332802-F100W2PN99_100-100.jpg",
  "code" : 0,
  "userId" : 100283509,
  "nickName" : "Ａ ✎﹏𓃬",
  "isContractAuthor" : true,
  "isMember" : true,
  "registerTime" : "2023-05-06 21:05:12",
  "lastLoginTime" : "2023-05-06 21:05:33",
  "gender" : {
    "name" : "女",
    "value" : 2
  },
  "isRealNameCertification" : true
}

body = JSON.stringify(obj);
$done({body});
