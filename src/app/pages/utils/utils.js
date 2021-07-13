const handleCondition = (condition) => (condition ? 'Comissionado' : 'Diária')

const handleModulus = (condition, modulus) => {
  if (condition == null) return '-'

  if (!condition) return 'N/A'

  return modulus ? 'Sim' : 'Não'
}

const handleDocument = (condition, document) => {
  if (condition == null) return '-'

  if (!condition) return 'N/A'

  return document
}

const handleDate = (date) => {
  if (!date) return '-'

  const formattedDate = Intl.DateTimeFormat('pt-br', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date))

  return formattedDate
}

const handleLink = (link) => {
  let condition = ''
  switch (link) {
    case 'D':
      condition = 'Diária'
      break
    case 'C':
      condition = 'Comissionamento'
      break
    default:
      condition = 'Grat Rep'
      break
  }
  return condition
}

const handleOperationality = (activity, opertionality) => {
  let name = ''
  switch (activity) {
    case 'P':
      name = 'Piloto '
      break
    case 'M':
      name = 'Mecânico '
      break
    case 'C':
      name = 'Comissário '
      break
    default:
      name = 'Médico '
      break
  }
  switch (opertionality) {
    case 'PB':
      name += 'Básico'
      break
    case 'PO':
      name += 'Operacional'
      break
    case 'OP':
      name += 'Operacional'
      break
    case 'IN':
      name = 'Instrutor'
      break
    default:
      name += 'Aluno'
      break
  }
  return name
}

const handleGradient = (link) => {
  let gradient = {}
  switch (link) {
    case 'D':
      gradient = {
        colorPrimary: '#0072ff',
        colorSecundary: '#00c6ff',
      }
      break
    case 'C':
      gradient = {
        colorPrimary: '#1D976C',
        colorSecundary: '#93F9B9',
      }
      break
    default:
      gradient = {
        colorPrimary: '#e65c00',
        colorSecundary: '#f9d423',
      }
      break
  }
  return gradient
}

const handleIncome = (income) => {
  const value = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(income.toFixed(2))
  return value
}

const handleKind = (kind) => {
  let icon = ''
  switch (kind) {
    case 'OS':
      icon = 'file'
      break
    default:
      icon = 'plane turn'
      break
  }
  return icon
}

const handleColor = (link) => {
  let color = ''
  switch (link) {
    case 'D':
      color = '#40C4FF'
      break
    case 'C':
      color = '#B2FF59'
      break
    default:
      color = '#FFC400'
      break
  }
  return color
}

export {
  handleCondition,
  handleModulus,
  handleDocument,
  handleDate,
  handleLink,
  handleOperationality,
  handleGradient,
  handleIncome,
  handleKind,
  handleColor,
}
