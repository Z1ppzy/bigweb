  ////Типы для описания серверов
export interface Server {
    name: string;
    description: string;
    imgSrc: string;
  }
  
  ////Типы для модального окна
  export interface ServerDetailsModalProps {
    server: Server;
    onClose: () => void;
  }