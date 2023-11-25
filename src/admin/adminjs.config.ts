/* eslint-disable @typescript-eslint/no-var-requires */
import { INestApplication } from '@nestjs/common';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/typeorm';
import { validate } from 'class-validator';
import { getProductResource } from './resources/product.resource';
import { getProductCategoryResource } from './resources/product-category.resource';

const AdminJSExpress = require('@adminjs/express');

export async function setupAdminPanel(app: INestApplication): Promise<void> {
  /**
   * Register TypeORM adapter for using
   */
  Resource.validate = validate;
  AdminJS.registerAdapter({ Database, Resource });

  /** Create adminBro instance */
  const adminBro = new AdminJS({
    resources: [
      getProductResource(app),
      getProductCategoryResource(app),
    ], // Here we will put resources
    rootPath: '/admin', // Define path for the admin panel
    branding: {
      companyName: 'Web-shop',
    },
    locale: {
      language: 'en',
      translations: {
        messages: {
          loginWelcome: 'Admin Panel for Web-shop',
        },
      },
    },
  });

  const admin = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  };

  /** Create router */
  const router = AdminJSExpress.buildAuthenticatedRouter(
    adminBro,
    {
      cookieName: 'adminjs',
      cookiePassword: 'superlongandcomplicatedname',
      authenticate: async (email: string, password: string) => {
        if (email === admin.email && password === admin.password) {
          return admin;
        }
        return null;
      },
    },
    null,
    {
      resave: false,
      saveUninitialized: true,
    },
  );

  /** Bind routing */
  app.use(adminBro.options.rootPath, router);
}
