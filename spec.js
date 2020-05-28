  //Este bot publicará um comentário predefinido o mais rápido possível em uma nova postagem no perfil de destino
describe('Instagram fast commenter', function() {

  // Edite as informações abaixo!
  // Página de destino
  const targetURL = 'https://www.instagram.com/p/CAofdDOglCR';
  var numberOfPostsOnTargetProfile = 30;
  const commentText = 'Dia dos namorados';
  // Minhas informações de usuário do instagram
  const myUsername = 'username';
  const myPassword = 'password';
  // Número de vezes que a página deve ser atualizada
  // 30000 iterations take aproximately 21 hours to complete ((2.5*30000)/3600) = 20.88 hours
  var numberOfIterations = 30000;

  // Esse código é executado uma vez para fazer login na sua conta
  browser.driver.get('https://www.instagram.com/accounts/login/');
  browser.driver.sleep(1000);
  browser.driver.findElement(by.css('[name="username"]')).sendKeys(myUsername);
  browser.driver.findElement(by.css('[name="password"]')).sendKeys(myPassword);
  //browser.driver.findElement(by.css(".sqdOP")).click();
  browser.driver.sleep(5000);
  browser.driver.findElement(by.className('Igw0E')).click();
  //console.log("estou aqui");
  browser.driver.sleep(8000);
  browser.driver.get(targetURL);
  browser.driver.sleep(5000);

  // Main function that runs in loop
  function instaAutoCommenter(numberOfIterations){
    it('Mensagem de Teste', function() {

      browser.driver.findElement(by.css('.g47SY')).getText().then( (data) => {
        console.log(numberOfIterations);
        console.log(data);
        var auxNumberOfPosts = data.replace('.','');
        auxNumberOfPosts = parseInt(auxNumberOfPosts, 10);
        console.log(auxNumberOfPosts);
        if(auxNumberOfPosts != numberOfPostsOnTargetProfile){
          browser.driver.sleep(1500);
          browser.driver.findElement(by.css('._9AhH0')).click();
          browser.driver.sleep(1500);
          browser.driver.findElement(by.css('.Ypffh')).click();
          browser.driver.sleep(200);
          browser.driver.findElement(by.css('.Ypffh')).sendKeys(commentText);
          browser.driver.findElement(by.css('.Ypffh')).sendKeys(protractor.Key.ENTER);
          browser.driver.sleep(2000);
          numberOfPostsOnTargetProfile++;
        }
        browser.driver.sleep(2500);
        browser.driver.get(targetURL);

      });

    });
  }

  // Very long loop
  while(numberOfIterations > 0){
    instaAutoCommenter(numberOfIterations);
    if(numberOfIterations != 0){
      numberOfIterations--;
    }
  }

});
