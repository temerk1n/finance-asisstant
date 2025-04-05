export type SkipType = 'Отпуск' | 'Болезнь' | 'Командировка';
export type Status = 'Отправлена на согласование' | 'Одобрено' | 'Отклонено';
export type Department =
    | 'Отдел кадров'
    | 'Бухгалтерия'
    | 'Отдел продаж'
    | 'Отдел закупок';

export type Filters = {
    status?: Status;
    skipType?: SkipType;
    date?: {
        from: Date | undefined;
        to: Date | undefined;
    };
};

export type Application = {
    date: Date;
    number: string;
    employee: string;
    skipType: SkipType;
    datesOfAbsence: {
        from: Date;
        to: Date;
    };
    status: Status;
};
