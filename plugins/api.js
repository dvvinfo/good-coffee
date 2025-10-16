const cities = [
  { id: '60f197849998570020506101', title: 'Москва' },
  { id: '60f197849998570020506102', title: 'Санкт-Петербург' },
  { id: '60f197849998570020506103', title: 'Новосибирск' },
  { id: '60f197849998570020506104', title: 'Екатеринбург' },
  { id: '60f197849998570020506105', title: 'Казань' },
  { id: '60f197849998570020506106', title: 'Нижний Новгород' },
  { id: '60f197849998570020506107', title: 'Челябинск' },
  { id: '60f197849998570020506108', title: 'Самара' },
  { id: '60f197849998570020506109', title: 'Омск' },
  { id: '60f197849998570020506110', title: 'Ростов-на-Дону' },
  { id: '60f197849998570020506111', title: 'Уфа' },
  { id: '60f197849998570020506112', title: 'Красноярск' },
  { id: '60f197849998570020506113', title: 'Воронеж' },
  { id: '60f197849998570020506114', title: 'Пермь' },
  { id: '60f197849998570020506115', title: 'Волгоград' },
  { id: '60f197849998570020506116', title: 'Краснодар' },
  { id: '60f197849998570020506117', title: 'Саратов' },
  { id: '60f197849998570020506118', title: 'Тюмень' },
  { id: '60f197849998570020506119', title: 'Тольятти' },
  { id: '60f197849998570020506120', title: 'Ижевск' },
  { id: '60f197849998570020506121', title: 'Барнаул' },
  { id: '60f197849998570020506122', title: 'Ульяновск' },
  { id: '60f197849998570020506123', title: 'Оренбург' }
]

const names = [
  'Александр', 'Алексей', 'Андрей', 'Антон', 'Артём',
  'Борис', 'Вадим', 'Валерий', 'Василий', 'Виктор',
  'Владимир', 'Вячеслав', 'Геннадий', 'Георгий', 'Григорий',
  'Даниил', 'Денис', 'Дмитрий', 'Евгений', 'Егор',
  'Анна', 'Алина', 'Александра', 'Виктория', 'Галина',
  'Дарья', 'Екатерина', 'Елена', 'Ирина', 'Кристина',
  'Людмила', 'Мария', 'Наталья', 'Ольга', 'Полина',
  'Светлана', 'Татьяна', 'Юлия'
]

function generateId() {
  return Math.random().toString(16).slice(2, 18) + Date.now().toString(16)
}

function generatePhone() {
  const num = Math.floor(Math.random() * 10000000).toString().padStart(7, '0')
  return `+79${num}`
}

function maskPhone(phone) {
  if (phone.length < 12) return phone
  return `${phone.slice(0, 3)}***${phone.slice(-4)}`
}

function generateUser(index) {
  const now = Date.now()
  const createdAt = now - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)
  const updatedAt = createdAt + Math.floor(Math.random() * (now - createdAt))
  const lastVisit = updatedAt
  const lastSave = createdAt + Math.floor(Math.random() * (now - createdAt))
  const lastSpend = createdAt + Math.floor(Math.random() * (now - createdAt))
  
  const saveCount = Math.floor(Math.random() * 200)
  const saveTotal = Math.floor(Math.random() * 5000)
  const spendCount = Math.floor(Math.random() * 100)
  const spendTotal = Math.floor(Math.random() * 10000)
  const balance = saveTotal - spendTotal + Math.floor(Math.random() * 1000)

  return {
    id: generateId(),
    name: names[Math.floor(Math.random() * names.length)],
    phone: generatePhone(),
    city: cities[Math.floor(Math.random() * cities.length)],
    balance,
    cashbackPercent: Math.floor(Math.random() * 20) + 5,
    isBlocked: Math.random() < 0.05,
    role: 'customer',
    saveCount,
    saveTotal,
    spendCount,
    spendTotal,
    lastVisit,
    lastSave,
    lastSpend,
    createdAt,
    updatedAt
  }
}

class UsersAPI {
  constructor() {
    this.users = []
    this.initialized = false
  }

  async list({ offset = 0, limit = 500 } = {}) {
    if (!this.initialized) {
      await this._initializeUsers()
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    const result = this.users.slice(offset, offset + limit)
    return result
  }

  async _initializeUsers() {
    this.users = []
    
    for (let i = 0; i < 100; i++) {
      this.users.push(generateUser(i))
    }
    await new Promise(resolve => setTimeout(resolve, 500))

    for (let batch = 100; batch < 8000; batch += 500) {
      const batchSize = Math.min(500, 8000 - batch)
      for (let i = 0; i < batchSize; i++) {
        this.users.push(generateUser(batch + i))
      }
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    this.initialized = true
  }

  getAll() {
    return this.users
  }
}

export default ({ app }, inject) => {
  const api = {
    users: new UsersAPI()
  }
  
  inject('api', api)
}
