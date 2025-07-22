// Задание 3: Вложенные пространства имен для управления пользователями
export namespace UserManagement {
  export interface User {
    name: string;
    email: string;
    createdAt: Date;
  }

  /**
   * Вложенное пространство имен для администраторов
   */
  export namespace Admin {
    /**
     * Перечисление прав доступа
     */
    export enum AccessLevel {
      READ = "read", // ИСПРАВЛЕНО: было "read", должно быть "READ"
      WRITE = "write",
      DELETE = "delete",
      SUPER_ADMIN = "super_admin",
    }

    /**
     * Класс администратора
     */
    export class AdminUser implements User {
      public name: string;
      public email: string;
      public createdAt: Date;
      private _isSuperAdmin: boolean;
      private _accessLevels: Set<AccessLevel>;

      constructor(name: string, email: string, isSuperAdmin = false) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
        this._isSuperAdmin = isSuperAdmin;
        this._accessLevels = new Set([AccessLevel.READ]); // ИСПРАВЛЕНО: теперь используется READ

        if (isSuperAdmin) {
          this._accessLevels.add(AccessLevel.SUPER_ADMIN);
          this._accessLevels.add(AccessLevel.WRITE);
          this._accessLevels.add(AccessLevel.DELETE);
        }
      }

      /**
       * Проверяет, является ли пользователь супер-администратором
       */
      get isSuperAdmin(): boolean {
        return this._isSuperAdmin;
      }

      /**
       * Получает список прав доступа
       */
      get accessLevels(): AccessLevel[] {
        return Array.from(this._accessLevels);
      }

      /**
       * Добавляет право доступа
       */
      grantAccess(level: AccessLevel): void {
        this._accessLevels.add(level);
      }

      /**
       * Удаляет право доступа
       */
      revokeAccess(level: AccessLevel): void {
        if (level === AccessLevel.SUPER_ADMIN && this._isSuperAdmin) {
          throw new Error("Cannot revoke super admin access");
        }
        this._accessLevels.delete(level);
      }

      /**
       * Проверяет наличие определенного права доступа
       */
      hasAccess(level: AccessLevel): boolean {
        return this._accessLevels.has(level) || this._isSuperAdmin;
      }

      /**
       * Повышает до супер-администратора
       */
      promoteToSuperAdmin(): void {
        this._isSuperAdmin = true;
        this._accessLevels.add(AccessLevel.SUPER_ADMIN);
        this._accessLevels.add(AccessLevel.WRITE);
        this._accessLevels.add(AccessLevel.DELETE);
      }

      /**
       * Понижает с супер-администратора
       */
      demoteFromSuperAdmin(): void {
        this._isSuperAdmin = false;
        this._accessLevels.delete(AccessLevel.SUPER_ADMIN);
      }

      /**
       * Возвращает информацию об администраторе
       */
      getInfo(): string {
        return `Администратор: ${this.name}
Email: ${this.email}
Создан: ${this.createdAt.toLocaleString("ru-RU")}
Супер-админ: ${this._isSuperAdmin ? "Да" : "Нет"}
Права доступа: ${this.accessLevels.join(", ")}`.trim();
      }
    }

    /**
     * Менеджер администраторов
     */
    export class AdminManager {
      private admins: Map<string, AdminUser> = new Map();

      /**
       * Создает нового администратора
       */
      createAdmin(
        name: string,
        email: string,
        isSuperAdmin = false
      ): AdminUser {
        if (this.admins.has(email)) {
          throw new Error(`Admin with email ${email} already exists`);
        }

        const admin = new AdminUser(name, email, isSuperAdmin);
        this.admins.set(email, admin);
        return admin;
      }

      /**
       * Получает администратора по email
       */
      getAdmin(email: string): AdminUser | undefined {
        return this.admins.get(email);
      }

      /**
       * Получает всех администраторов
       */
      getAllAdmins(): AdminUser[] {
        return Array.from(this.admins.values());
      }

      /**
       * Удаляет администратора
       */
      removeAdmin(email: string): boolean {
        return this.admins.delete(email);
      }
    }
  }
}

// Задание 3: Тестирование управления пользователями
console.log("\n3. ТЕСТИРОВАНИЕ УПРАВЛЕНИЯ ПОЛЬЗОВАТЕЛЯМИ");
console.log("=========================================");

// Создаем менеджер администраторов
const adminManager = new UserManagement.Admin.AdminManager();

// Создаем обычного администратора
const admin1 = adminManager.createAdmin(
  "Mia Pak",
  "mia@gmail.com",
  false
);
console.log("Создан обычный администратор:");
console.log(admin1.getInfo());

// Добавляем права доступа
admin1.grantAccess(UserManagement.Admin.AccessLevel.WRITE);
admin1.grantAccess(UserManagement.Admin.AccessLevel.DELETE);
console.log("\nПосле добавления прав:");
console.log(admin1.getInfo());

// Создаем супер-администратора
const superAdmin = adminManager.createAdmin(
  "Kira Pak",
  "kira@gmail.com",
  true
);
console.log("\nСоздан супер-администратор:");
console.log(superAdmin.getInfo());

// Повышаем обычного администратора
admin1.promoteToSuperAdmin();
console.log("\nПосле повышения до супер-администратора:");
console.log(admin1.getInfo());
