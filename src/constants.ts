import { Department, SkipType, Status } from './types.ts';

export const DEPARTMENTS: Department[] = [
    'Отдел кадров',
    'Бухгалтерия',
    'Отдел продаж',
    'Отдел закупок',
];

export const SKIP_TYPES: SkipType[] = ['Болезнь', 'Отпуск', 'Командировка'];

export const STATUSES: Status[] = [
    'Отправлена на согласование',
    'Одобрено',
    'Отклонено',
];
