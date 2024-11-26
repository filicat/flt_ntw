declare global {
    interface MessageEvent<T = any> {
      data: T;
      origin: string;
      lastEventId: string;
      source: WindowProxy | MessagePort | ServiceWorker | null;
      ports: ReadonlyArray<MessagePort>;
    }
  }
  
  export {};