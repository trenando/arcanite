<template>
  <form @submit.prevent="onSubmit" class="form">
    <h2 class="form__title">Информация о пользователе</h2>
    <div class="form__content">
      <div class="form__items">
        <div class="form__item">
          <label for="surname">Фамилия:</label>
          <input
            id="surname"
            type="text"
            v-model="user.surname"
            @blur="$v.user.surname.$touch()"
            name="surname"
            :class="{ error__input: $v.user.surname.$error }"
          />
          <span class="error" v-if="$v.user.surname.$error">
            Обязательное поле
          </span>
        </div>
        <div class="form__item">
          <label for="name">Имя:</label>
          <input
            id="name"
            type="text"
            v-model="user.name"
            name="name"
            @blur="$v.user.name.$touch()"
            :class="{ error__input: $v.user.name.$error }"
          />
          <span class="error" v-if="$v.user.name.$error">
            Обязательное поле
          </span>
        </div>
        <div class="form__item">
          <label for="lastname">Отчество:</label>
          <input
            id="lastname"
            type="text"
            v-model="user.lastname"
            name="lastname"
            @blur="$v.user.lastname.$touch()"
            :class="{ error__input: $v.user.lastname.$error }"
          />
          <span class="error" v-if="$v.user.lastname.$error">
            Обязательное поле
          </span>
        </div>
        <div class="form__item">
          <label for="birthday">Дата рождения:</label>
          <input
            class="form__date"
            id="birthday"
            type="date"
            name="birthday"
            v-model="user.date"
            @blur="$v.user.date.$touch()"
            :class="{ error__input: $v.user.date.$error }"
          />
          <span class="error" v-if="$v.user.date.$error">
            Обязательное поле
          </span>
        </div>
        <div class="form__item">
          <label for="phone-number">Номер телефона:</label>
          <input
            id="phone-number"
            type="tel"
            placeholder="+71234567890"
            name="phone-number"
            v-model="user.phoneNumber"
            @blur="$v.user.phoneNumber.$touch()"
            :class="{ error__input: $v.user.phoneNumber.$error }"
          />
          <div v-if="$v.user.phoneNumber.$error">
            <span class="error" v-if="!$v.user.phoneNumber.required">
              Обязательное поле
            </span>
            <span class="error" v-else-if="!$v.user.phoneNumber.number">
              Неверный номер телефона
            </span>
          </div>
        </div>
        <div class="form__item--checkboxes">
          <span>Пол:</span>
          <div>
            <label for="male">Мужчина</label>
            <input
              id="male"
              type="radio"
              name="gender"
              v-model="user.gender"
              value="male"
            />
            <label for="female">Женщина</label>
            <input
              id="female"
              type="radio"
              name="gender"
              v-model="user.gender"
              value="female"
            />
          </div>
        </div>
        <div class="form__item--checkboxes">
          <span>Группа клиентов:</span>
          <div>
            <label for="vip">VIP</label>
            <input
              id="vip"
              type="checkbox"
              value="VIP"
              name="vip"
              v-model="$v.user.clientGroup.$model"
            />
            <label for="problems">Проблемные</label>
            <input
              id="problems"
              type="checkbox"
              value="Проблемные"
              name="problems"
              v-model="$v.user.clientGroup.$model"
            />
            <label for="omc">ОМС</label>
            <input
              id="omc"
              type="checkbox"
              value="ОМС"
              name="omc"
              v-model="$v.user.clientGroup.$model"
            />
          </div>
          <div v-if="$v.user.clientGroup.$dirty">
            <span class="error" v-if="!$v.user.clientGroup.required">
              Выберите хотя бы один вариант
            </span>
          </div>
        </div>
        <div class="form__item">
          <span>Лечащий врач:</span>
          <select v-model="user.doctor">
            <option disabled value="">Выберите один из вариантов:</option>
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышева</option>
          </select>
        </div>
        <div class="form__item--checkbox">
          <label for="sms">Не отправлять СМС:</label>
          <input
            id="sms"
            type="checkbox"
            v-model="user.disableSms"
            name="sms"
          />
        </div>
      </div>
      <div class="form__items">
        <div class="form__item">
          <label for="index">Индекс:</label>
          <input id="index" type="text" name="index" v-model="user.index" />
        </div>
        <div class="form__item">
          <label for="country">Страна:</label>
          <input
            id="country"
            type="text"
            name="country"
            v-model="user.country"
          />
        </div>
        <div class="form__item">
          <label for="region">Область:</label>
          <input id="region" type="text" name="region" v-model="user.region" />
        </div>
        <div class="form__item">
          <label for="city">Город:</label>
          <input
            id="city"
            type="text"
            name="city"
            v-model="user.city"
            @blur="$v.user.city.$touch()"
            :class="{ error__input: $v.user.city.$error }"
          />
          <span class="error" v-if="$v.user.city.$error">
            Обязательное поле
          </span>
        </div>
        <div class="form__item">
          <label for="street">Улица:</label>
          <input id="street" type="text" name="street" v-model="user.street" />
        </div>
        <div class="form__item">
          <label for="building">Дом:</label>
          <input
            id="building"
            type="text"
            name="building"
            v-model="user.building"
          />
        </div>
        <div class="form__item">
          <span>Тип документа:</span>
          <select
            v-model="user.document"
            @blur="$v.user.document.$touch()"
            :class="{ error__select: $v.user.document.$error }"
          >
            <option disabled value="">Выберите один из вариантов:</option>
            <option>Паспорт</option>
            <option>Свидетельство о рождении</option>
            <option>Вод. удостоверение</option>
          </select>
          <span class="error" v-if="$v.user.document.$error">
            Обязательное поле
          </span>
        </div>
        <div class="form__item">
          <label for="passIndex">Серия:</label>
          <input
            id="passIndex"
            type="text"
            name="passIndex"
            v-model="user.passIndex"
          />
        </div>
        <div class="form__item">
          <label for="passNumber">Номер:</label>
          <input
            id="passNumber"
            type="text"
            name="passNumber"
            v-model="user.passNumber"
          />
        </div>
        <div class="form__item">
          <label for="received">Кем выдан:</label>
          <input
            id="received"
            type="text"
            name="received"
            v-model="user.received"
          />
        </div>
        <div class="form__item">
          <label for="receivedDate">Дата выдачи:</label>
          <input
            id="receivedDate"
            class="form__date"
            type="date"
            name="receivedDate"
            v-model="user.receivedDate"
            @blur="$v.user.receivedDate.$touch()"
            :class="{ error__input: $v.user.receivedDate.$error }"
          />
          <span class="error" v-if="$v.user.receivedDate.$error">
            Обязательное поле
          </span>
        </div>
      </div>
    </div>
    <div class="submit">
      <span class="success" v-if="submit === 'SUCCESS'">
        Новый клиент создан
      </span>
      <span class="error" v-if="submit === 'ERROR'">
        Введите данные
      </span>
    </div>
    <div class="form__btn">
      <button type="submit">Отправить</button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  computed: {
    ...mapState({
      user: state => {
        return state.user.user;
      },
      submit: state => {
        return state.submit.submitMessage;
      }
    }),
    ...mapGetters(["changeSubmitMessage"])
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.changeSubmitMessage("ERROR");
      } else {
        this.changeSubmitMessage("SUCCESS");
        const { ...newUser } = this.user;
        this.updateUser(newUser);
        this.$v.$reset();
      }
    },
    ...mapMutations(["updateUser"])
  },
  validations: {
    user: {
      surname: {
        required
      },
      name: {
        required
      },
      lastname: {
        required
      },
      date: {
        required
      },
      phoneNumber: {
        required,
        number: val => /(\+7|8)[0-9]{10}/.test(val)
      },
      clientGroup: {
        required
      },
      city: {
        required
      },
      document: {
        required
      },
      receivedDate: {
        required
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/variables.css");
.form {
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  background-color: var(--form-color);
  border-radius: 10px;
  @media (max-width: 775px) {
    max-width: 400px;
  }
  @media (max-width: 450px) {
    max-width: 295px;
  }
  &__content {
    display: flex;
    @media (max-width: 775px) {
      flex-direction: column;
    }
  }
  &__items {
    width: 50%;
    @media (max-width: 775px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
  &__title {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    @media (max-width: 775px) {
      margin-top: 5px;
      font-size: 24px;
    }
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 340px;
    margin: 0 0 10px 10px;
    @media (max-width: 450px) {
      max-width: 270px;
      margin-left: 0;
    }
    input {
      box-sizing: border-box;
      margin-top: 5px;
      padding-left: 5px;
      height: 20px;
      width: 100%;
      border-radius: 2px;
    }
    select {
      margin-top: 5px;
      color: var(--select-text-color);
    }
  }
  &__item--checkbox {
    max-width: 340px;
    width: 100%;
    padding: 0 0 10px 10px;
    @media (max-width: 450px) {
      max-width: 270px;
      padding-left: 0;
    }
    input {
      margin-left: 10px;
    }
  }
  &__item--checkboxes {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 340px;
    padding: 0 0 10px 10px;
    @media (max-width: 450px) {
      max-width: 270px;
      padding-left: 0;
    }
    span {
      margin-bottom: 2px;
    }
    input {
      margin: 0 5px;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    max-width: 95%;
    width: 100%;
    margin: 40px 0 10px 10px;
    button {
      width: 200px;
      height: 25px;
      background-color: var(--button-background-color);
      border: 1px solid var(--button-border-color);
      border-radius: 10px;
      color: var(--button-text-color);
    }
    @media (max-width: 450px) {
      margin-bottom: 20px;
    }
  }
  &__date {
    color: var(--date-placeholder-color);
  }
}
.error {
  color: var(--error-text-color);
  &__input {
    border: 2px solid var(--error-input-border);
  }
  &__select {
    border: 2px solid var(--error-select-border);
  }
  &__validate {
    display: flex;
    color: var(--error-text-color);
    justify-content: center;
    width: 100%;
    margin-bottom: -10px;
  }
}
.submit {
  display: flex;
  width: 100%;
  justify-content: center;
}
.success {
  color: var(--success-text-color);
}
</style>
