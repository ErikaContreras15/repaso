import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"repaso-1bd60","appId":"1:22768910029:web:7af74c09f804dce41cf384","storageBucket":"repaso-1bd60.appspot.com","apiKey":"AIzaSyBM5F3rmjp4LR7HPKSMNAgcyAVr3CY0zCA","authDomain":"repaso-1bd60.firebaseapp.com","messagingSenderId":"22768910029"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"repaso-1bd60","appId":"1:22768910029:web:7af74c09f804dce41cf384","storageBucket":"repaso-1bd60.appspot.com","apiKey":"AIzaSyBM5F3rmjp4LR7HPKSMNAgcyAVr3CY0zCA","authDomain":"repaso-1bd60.firebaseapp.com","messagingSenderId":"22768910029"}))  , provideFirestore(() => getFirestore())]

};
