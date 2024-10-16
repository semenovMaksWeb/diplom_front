<template>
    <form class="formLogin">
        <h2 class="h2"> Форма авторизации</h2>
        <div class="wrapper">
            <label class="label" for="tel">Номер телефона</label>
            <input id="tel" placeholder="Номер телефона">
        </div>
        <div class="wrapper">
            <label class="label" for="password">Номер телефона</label>
            <input id="password" type="password" placeholder="Пароль">
        </div>
        <div class="wrapper">
            <label class="label" for="developer">Разработчик</label>
            <input id="developer" type="checkbox">
        </div>
        <button class="buttonLogin button_success button" style="--button-color:#45e045">Вход</button>
    </form>
</template>

<script lang="ts">
export default {
    name: "FormLogin"
}
</script>

<style lang="less">
.buttonLogin {
    margin-top: 10px;
}
</style>