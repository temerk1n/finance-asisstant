import { Department, SkipType, Status } from './types.ts';

export const DEPARTMENTS: Department[] = [
    'Отдел кадров',
    'Бухгалтерия',
    'Отдел продаж',
    'Отдел закупок',
];

export const SKIP_TYPES: SkipType[] = [
    'Отпуск',
    'Болезнь',
    'Командировка',
    'Отпуск за свой счёт',
    'Удалённая работа',
    'Обучение',
    'Отгул',
];

export const STATUSES: Status[] = [
    'Отправлено на согласование',
    'Согласована',
    'Принята',
    'Требует подписания сотрудником',
    'Подписана',
    'Отозвана для изменения',
    'Необходимо внести изменения',
    'Техническая ошибка',
    'Отменена',
];

export const ABSENCE_WARNING = 7;
export const ABSENCE_WARNING_PERCENTAGE = 0.7;
