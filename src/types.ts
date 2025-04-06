export type SkipType =
    | 'Отпуск'
    | 'Болезнь'
    | 'Командировка'
    | 'Отпуск за свой счёт'
    | 'Удалённая работа'
    | 'Обучение'
    | 'Отгул';

export type Status =
    | 'Отправлено на согласование'
    | 'Согласована'
    | 'Принята'
    | 'Требует подписания сотрудником'
    | 'Подписана'
    | 'Отозвана для изменения'
    | 'Необходимо внести изменения'
    | 'Техническая ошибка'
    | 'Отменена';

export type Department =
    | 'Отдел кадров'
    | 'Бухгалтерия'
    | 'Отдел продаж'
    | 'Отдел закупок';

export type Filters = {
    status?: Status;
    skipType?: SkipType;
    department?: Department;
    date?: {
        from: Date | undefined;
        to: Date | undefined;
    };
};

export type Application = {
    date: Date;
    number: string;
    employee: string;
    department: Department;
    skipType: SkipType;
    datesOfAbsence: {
        from: Date;
        to: Date;
    };
    status: Status;
    recommended: boolean;
};

export type LineChartData = {
    labels: string[];
    data: number[];
};
