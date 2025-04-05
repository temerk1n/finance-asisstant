import { Application } from '../types.ts';

export const applicationsMock: Application[] = [
    {
        date: new Date('2024-12-25'),
        number: 'AB3783',
        employee: 'Иванов Иван Иванович',
        skipType: 'Отпуск',
        datesOfAbsence: {
            from: new Date('2025-01-10'),
            to: new Date('2025-01-13'),
        },
        status: 'Одобрено',
    },
    {
        date: new Date('2025-02-02'),
        number: 'AB3783',
        employee: 'Иванов Иван Иванович',
        skipType: 'Болезнь',
        datesOfAbsence: {
            from: new Date('2025-02-12'),
            to: new Date('2025-02-15'),
        },
        status: 'Отправлена на согласование',
    },
    {
        date: new Date('2025-01-01'),
        number: 'AB8565',
        employee: 'Иванов Иван Иванович',
        skipType: 'Отпуск',
        datesOfAbsence: {
            from: new Date('2025-02-01'),
            to: new Date('2025-02-10'),
        },
        status: 'Отклонено',
    },
    {
        date: new Date('2025-03-22'),
        number: 'AB4124',
        employee: 'Иванов Иван Иванович',
        skipType: 'Командировка',
        datesOfAbsence: {
            from: new Date('2025-04-01'),
            to: new Date('2025-04-8'),
        },
        status: 'Отправлена на согласование',
    },
];
