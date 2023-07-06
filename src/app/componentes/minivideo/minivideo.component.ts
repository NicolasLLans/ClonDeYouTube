import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-minivideo',
  templateUrl: './minivideo.component.html',
  styleUrls: ['./minivideo.component.css']
})
export class MinivideoComponent implements OnInit {
  datos: any[] = [
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/T_j60n1zgu0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYfR8pCzSqLuhn1ydiQfaMtpJoKA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Reaccionando a  las Tecnologías y Lenguajes de Programación Mejor Pagadas en 2023',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación" 
    },
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/RCih9bUkH1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT7u0xKlmShngU9Lkjylh2NnXKaA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqPAmx41p_AxeAw-d61aVutp2zNuOe3CMHLDtxrC=s68-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"VVLP",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "diseño gráfico"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "Música"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "En tiempo real"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación"  
    },    
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/T_j60n1zgu0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYfR8pCzSqLuhn1ydiQfaMtpJoKA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Reaccionando a  las Tecnologías y Lenguajes de Programación Mejor Pagadas en 2023',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación" 
    },
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/RCih9bUkH1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT7u0xKlmShngU9Lkjylh2NnXKaA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqPAmx41p_AxeAw-d61aVutp2zNuOe3CMHLDtxrC=s68-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"VVLP",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "diseño gráfico"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "Música"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "En tiempo real"  
    },    
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/T_j60n1zgu0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYfR8pCzSqLuhn1ydiQfaMtpJoKA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Reaccionando a  las Tecnologías y Lenguajes de Programación Mejor Pagadas en 2023',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación" 
    },
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/RCih9bUkH1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT7u0xKlmShngU9Lkjylh2NnXKaA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqPAmx41p_AxeAw-d61aVutp2zNuOe3CMHLDtxrC=s68-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"VVLP",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "diseño gráfico"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "Música"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "En tiempo real"  
    },    
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/T_j60n1zgu0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYfR8pCzSqLuhn1ydiQfaMtpJoKA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Reaccionando a  las Tecnologías y Lenguajes de Programación Mejor Pagadas en 2023',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación" 
    },
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/RCih9bUkH1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT7u0xKlmShngU9Lkjylh2NnXKaA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqPAmx41p_AxeAw-d61aVutp2zNuOe3CMHLDtxrC=s68-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"VVLP",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "diseño gráfico"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "Música"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "En tiempo real"  
    },
        { 
      vistaPrevia: 'https://i.ytimg.com/vi/T_j60n1zgu0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYfR8pCzSqLuhn1ydiQfaMtpJoKA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Reaccionando a  las Tecnologías y Lenguajes de Programación Mejor Pagadas en 2023',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación" 
    },
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/RCih9bUkH1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT7u0xKlmShngU9Lkjylh2NnXKaA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqPAmx41p_AxeAw-d61aVutp2zNuOe3CMHLDtxrC=s68-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"VVLP",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "diseño gráfico"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "Música"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "En tiempo real"  
    },    { 
      vistaPrevia: 'https://i.ytimg.com/vi/T_j60n1zgu0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYfR8pCzSqLuhn1ydiQfaMtpJoKA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Reaccionando a  las Tecnologías y Lenguajes de Programación Mejor Pagadas en 2023',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación" 
    },
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/RCih9bUkH1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT7u0xKlmShngU9Lkjylh2NnXKaA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqPAmx41p_AxeAw-d61aVutp2zNuOe3CMHLDtxrC=s68-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"VVLP",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "diseño gráfico"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "Música"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "En tiempo real"  
    },    { 
      vistaPrevia: 'https://i.ytimg.com/vi/T_j60n1zgu0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYfR8pCzSqLuhn1ydiQfaMtpJoKA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Reaccionando a  las Tecnologías y Lenguajes de Programación Mejor Pagadas en 2023',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación" 
    },
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/RCih9bUkH1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT7u0xKlmShngU9Lkjylh2NnXKaA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqPAmx41p_AxeAw-d61aVutp2zNuOe3CMHLDtxrC=s68-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"VVLP",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "diseño gráfico"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "Música"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "En tiempo real"  
    },    { 
      vistaPrevia: 'https://i.ytimg.com/vi/T_j60n1zgu0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYfR8pCzSqLuhn1ydiQfaMtpJoKA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Reaccionando a  las Tecnologías y Lenguajes de Programación Mejor Pagadas en 2023',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación" 
    },
    { 
      vistaPrevia: 'https://i.ytimg.com/vi/RCih9bUkH1w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT7u0xKlmShngU9Lkjylh2NnXKaA', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqPAmx41p_AxeAw-d61aVutp2zNuOe3CMHLDtxrC=s68-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"VVLP",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "programación"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "viajes"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "diseño gráfico"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "Música"  
    },
    { 
      vistaPrevia: 'https://via.placeholder.com/500x281?text=placeholder', 
      avatar: "https://yt3.ggpht.com/ytc/AGIKgqMSpqpZVn-TGZerYSVeuzhBqjNLU8f9_XYVMfOP=s48-c-k-c0x00ffffff-no-rj", 
      nombre: 'Nombre del video',
      usuario:"midudev",
      vistas: "6K",
      tiempo: "8 horas",
      categoria: "En tiempo real"  
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
