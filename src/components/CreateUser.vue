<template>
<div class="container text-center">
  <!--<div class="registration">-->
      <!--<div class="regHeader">-->
          <!--<p>РЕГИСТРАЦИЯ</p>-->
      <!--</div>-->
      <!--<div class="regForm d-flex">-->
          <!--<form @submit="submitForm" class="text-center col-8 col-md-6 m-auto">-->
              <!--<input v-model="username" placeholder="Имя пользователя" class="email col-12" type="text">-->
              <!--<input v-model="email" placeholder="E-mail" class="email col-12" type="text">-->
              <!--<input v-model="password" placeholder="Пароль:" class="password1 col-12" type="text">-->
              <!--&lt;!&ndash;<input placeholder="Повторите пароль:" class="password2 col-12" type="text">&ndash;&gt;-->
              <!--<button type="submit" class="regBtn col-8 col-md-6 ">РЕГИСТРАЦИЯ</button>-->
          <!--</form>-->
      <!--</div>-->
  <!--</div>-->
  <!--<div class="footer">-->
      <!--<div class="imgFooter d-none d-md-block float-left">-->
          <!--<img src="static/images/Ellipse.png" alt="">-->
      <!--</div>-->
      <!--<div class="footerMenu col-12 col-md-6 float-right justify-content-around d-inline-block d-md-inline-flex">-->
          <!--<p>О НАС</p>-->
          <!--<p>КОНТАКТЫ</p>-->
          <!--<p>ОТЗЫВЫ</p>-->
      <!--</div>-->
      <!--<div class="footerBottom text-center d-inline-block d-md-flex">-->
          <!--<div class="copyright col-12 col-md-6">&copy; 2018-2019 «GiftService»</div>-->
          <!--<div class="social col-12 col-md-6 align-content-center justify-content-center justify-content-md-end">-->
              <!--<i class="fab fa-instagram"></i>-->
              <!--<i class="fab fa-facebook-square"></i>-->
          <!--</div>-->
      <!--</div>-->
  <!--</div>-->
  <div class="title">
        <div class="titleMenu d-lg-flex">
            <div class="pos-f-t d-sm-none">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bgNav">
                        <ul class="navbar-nav navGroup">
                            <li class="nav-item">
                                <a class="nav-link" href="#">ПОЖЕЛАНИЯ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ВОЙТИ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">РЕГИСТРАЦИЯ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav class="navbar navbar-light bgNav">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
            <div class="col-1 p-0"></div>
            <div class="w-100 logoTitle col-lg-4 col-12 d-flex p-0">
                <img src="static/images/LOGO.svg" alt="">
            </div>
            <div class="menu col-lg-6 col-12 justify-content-between d-flex align-items-center p-0">
                <span>ПОЖЕЛАНИЯ</span>
                <span>ВОЙТИ</span>
                <button class="regBtnTitle col-sm-4">РЕГИСТРАЦИЯ</button>
            </div>
            <div class="col-1 p-0"></div>
        </div>
    </div>
    <div class="registration pt-5 pb-5">
        <div class="regHeader">
            <p>РЕГИСТРАЦИЯ</p>
        </div>
        <div class="regForm d-flex">
            <div class="col-3 p-0"></div>
            <form @submit="submitForm" class="text-center col-6 p-0" action="#">
                <!--<input placeholder="Имя:" class="email col-12" type="text">-->
                <!--<input placeholder="Фамилия:" class="email col-12" type="text">-->
                <input v-model="email" placeholder="E-mail:" class="email col-12" type="text">
                <input v-model="password" placeholder="Пароль:" class="password1 col-12" type="password">
                <input v-model="password2" placeholder="Повторите пароль:" class="password2 col-12" type="password">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Подтверждаю обработку персональных данных</label>
                </div>
                <div class="lendBts p-0 col-12 flex-column flex-md-row d-flex justify-content-md-between align-items-center">
                    <button type="submit" class="regBtnTitle col-8 col-md-6 ">РЕГИСТРАЦИЯ</button>
                    <div class="col-12 col-md-4 p-2 p-md-0 d-flex justify-content-end">
                        <a class="m-1" href="#">
                            <img src="static/images/VK.svg" alt="">
                        </a>
                        <a class="m-1" href="#">
                            <img src="static/images/G+.svg" alt="">
                        </a>
                    </div>
                </div>
            </form>
            <div class="col-3 p-0"></div>
        </div>
    </div>
    <div class="footer p-0 m-auto m-sm-0 d-md-flex">
        <div class="col-1 p-0"></div>
        <div class="col-4 p-0">
            <div class="left d-flex flex-column">
                <div class="imgFooter d-none d-lg-flex">
                    <img src="static/images/LOGO.svg" alt="">
                </div>
                <div class="copyright">&copy; 2018-2019 «GiftService»</div>
            </div>
        </div>
        <div class="col-3 p-0"></div>
        <div class="col-3 p-0 d-flex align-items-center">
            <div class="right d-flex flex-column align-items-center w-100">
                <div class="footerMenu col-12 float-right justify-content-between d-inline-block d-md-flex">
                    <p class="m-0">О НАС</p>
                    <p class="m-0">КОНТАКТЫ</p>
                    <p class="m-0">ОТЗЫВЫ</p>
                </div>
                <div class="footerBottom p-0 col-12 d-flex justify-content-end">
                    <img class="" src="static/images/instagram.svg" alt="">
                    <img class="" src="static/images/facebook.svg" alt="">
                </div>
            </div>
        </div>
        <div class="col-1 p-0"></div>
    </div>
</div>
</template>

<script>
export default {
  name: 'CreateUser',
  data () {
    return {
      'email': '',
      'password': '',
      'password2': ''
    }
  },
  methods: {
    submitForm (event) {
      this.createUser()
      this.email = ''
      this.password = ''
      this.password2 = ''
      event.preventDefault()
    },
    createUser () {
      this.$store.dispatch('createUser', {email: this.email, password: this.password, password2: this.password2})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
