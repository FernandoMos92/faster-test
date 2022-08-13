import Calendar from '../../public/images/calendar.svg'
import Diagram from '../../public/images/diagram.svg'
import Message from '../../public/images/message.svg'

import profile from '../../public/images/profile-circle.svg'
import people from '../../public/images/people.svg'
import menuBoard from '../../public/images/menu-board.svg'

import logout from '../../public/images/logout.svg'
import settings from '../../public/images/setting.svg'

export const mainIcons = [
  {
    icon: Calendar,
    name: 'Agenda'
  },
  {
    icon: Message,
    name: 'Mensagens'
  },
  {
    icon: Diagram,
    name: 'Ralatórios'
  }
]

export const myAccontIcons = [
  {
    icon: profile,
    name: 'Meus Eventos'
  },
  {
    icon: people,
    name: 'Meus Time'
  },
  {
    icon: menuBoard,
    name: 'Minhas Atividades'
  }
]

export const systemIcons = [
  {
    icon: settings,
    name: 'Configurações'
  },
  {
    icon: logout,
    name: 'Sair'
  }
]
