var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?85266';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
  "backgroundColor":"#4dc247",
  "ctaText":"Contactar",
  "borderRadius":"25",
  "marginLeft":"0",
  "marginBottom":"50",
  "marginRight":"50",
  "position":"right"
},
"brandSetting":{
  "brandName":"Ana Pereira",
  "brandSubTitle":"Psicóloga",
  "brandImg":"https://gustavosilva.me/anapereirapsicologa.pt/assets/images/profile.png",
  "welcomeText":"Olá, como posso ajudar?",
  "messageText":"",
  "backgroundColor":"#0a5f54",
  "ctaText":"Entrar em contacto",
  "borderRadius":"25",
  "autoShow":false,
  "phoneNumber":"351913343632"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
