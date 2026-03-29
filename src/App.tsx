import { useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type IconProps = { size?: number; className?: string };

function IcHome({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4 10.7 12 4l8 6.7V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>;
}
function IcBudget({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4 18h16M6 15V9m6 6V6m6 9v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcBrain({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 4.5A3.5 3.5 0 0 0 5.5 8v.3a3 3 0 0 0-1.5 2.6 3 3 0 0 0 1.5 2.6v.8A3.7 3.7 0 0 0 9.2 18H10V4.5zm6 0A3.5 3.5 0 0 1 18.5 8v.3a3 3 0 0 1 1.5 2.6 3 3 0 0 1-1.5 2.6v.8a3.7 3.7 0 0 1-3.7 3.7H14V4.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>;
}
function IcGoal({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>;
}
function IcUser({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8"/><path d="M5.5 19a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcSpark({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;
}
function IcArrow({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IcPlus({ size = 20, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="11" y="5" width="2" height="14" rx="1" fill="currentColor"/><rect x="5" y="11" width="14" height="2" rx="1" fill="currentColor"/></svg>;
}
function IcClose({ size = 18, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcScan({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8 4H6a2 2 0 0 0-2 2v2m14 0V6a2 2 0 0 0-2-2h-2M8 20H6a2 2 0 0 1-2-2v-2m14 0v2a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.7"/></svg>;
}
function IcUpload({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 16V7m0 0-3 3m3-3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 18h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcMic({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="9" y="4" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M6.5 11.5a5.5 5.5 0 1 0 11 0M12 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcWallet({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M16 12h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcCalendar({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/><path d="M8 4v4M16 4v4M4 10h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcFood({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M7 4v7M10 4v7M13 4v7M8 11v9m8-16v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}
function IcCar({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m5 14 1.8-4a2 2 0 0 1 1.9-1.2h6.6A2 2 0 0 1 17.2 10L19 14v4h-2v-1H7v1H5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><circle cx="8" cy="15" r="1.2" fill="currentColor"/><circle cx="16" cy="15" r="1.2" fill="currentColor"/></svg>;
}
function IcBag({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M6 8h12l-1 11H7z" stroke="currentColor" strokeWidth="1.7"/><path d="M9 8V6a3 3 0 1 1 6 0v2" stroke="currentColor" strokeWidth="1.7"/></svg>;
}
function IcBolt({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M13 2 5 13h6l-1 9 9-13h-6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;
}
function IcMoney({ size = 14, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.7"/></svg>;
}
function IcKeyboard({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="6.5" width="18" height="11" rx="3" stroke="currentColor" strokeWidth="1.7"/><path d="M7 11h.01M10 11h.01M13 11h.01M16 11h.01M8 14h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}
function IcBell({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M6 17h12l-1.4-1.8a4 4 0 0 1-.8-2.4V10a3.8 3.8 0 1 0-7.6 0v2.8c0 .9-.3 1.7-.8 2.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M10 18.5a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}
function IcShield({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 3 5.5 5.7v5.6c0 4.3 2.6 7.7 6.5 9.7 3.9-2 6.5-5.4 6.5-9.7V5.7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="m9.5 11.8 1.8 1.8 3.2-3.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IcCard({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.7"/><path d="M3 10h18" stroke="currentColor" strokeWidth="1.7"/></svg>;
}
function IcMoon({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M14.8 4.8a7.5 7.5 0 1 0 4.4 13.6 8 8 0 1 1-4.4-13.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;
}
function IcGlobe({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7"/><path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}
function IcFolder({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3.5 8a2 2 0 0 1 2-2h4l1.5 2h7.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;
}
function IcDoc({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M7 4.5h7l4 4V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M14 4.5V9h4M9 12h6M9 15h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}
function IcCog({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m12 8.5.9-1.8 2 .4.7 1.9 1.8.9 1.4-1.4 1.5 1.5-1.4 1.4.9 1.8 1.9.7-.4 2-1.8.9-.9 1.8 1.4 1.4-1.5 1.5-1.4-1.4-1.8.9-.7 1.9-2-.4-.9-1.8-1.8-.9-1.4 1.4-1.5-1.5 1.4-1.4-.9-1.8-1.9-.7.4-2 1.8-.9.9-1.8-1.4-1.4 1.5-1.5 1.4 1.4 1.8-.9.7-1.9 2 .4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7"/></svg>;
}
function IcHelp({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7"/><path d="M9.5 9.4a2.5 2.5 0 1 1 3.7 2.2c-.8.4-1.2.9-1.2 1.9M12 16h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
}
function IcLogout({ size = 16, className }: IconProps) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M10 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4M14 8l4 4-4 4M18 12H9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

// ── i18n ──────────────────────────────────────────────────────────────────────
type Lang = 'en' | 'ru' | 'kk';
type Currency = 'KZT' | 'USD' | 'RUB';

const translations = {
  en: {
    nav_home: 'Home', nav_budget: 'Budget', nav_insights: 'Insights',
    nav_goals: 'Goals', nav_profile: 'Profile',
    total_balance: 'Total Balance', income: 'Income', expenses: 'Expenses',
    budget_overview: 'Budget Overview', recent_activity: 'Recent Transactions',
    view_all: 'View all', smart_rec: 'Smart Recommendation', greeting: 'Hello',
    transactions: 'Transactions', today: 'Today', yesterday: 'Yesterday',
    all: 'All', spent: 'Spent', monthly_summary: 'Monthly Summary',
    no_transactions: 'No transactions',
    cat_food: 'Food', cat_transport: 'Transport', cat_shopping: 'Shopping',
    cat_bills: 'Bills', cat_income: 'Income',
    goals: 'Goals', my_pockets: 'My Pockets', create_pocket: 'Create pocket',
    new_goal: 'New Goal', primary_label: 'Primary', saved: 'Saved',
    target: 'Target', remaining: 'Remaining', projected_finish: 'Projected finish',
    add_funds_btn: 'Add funds', details: 'Details', active_pockets: 'active pockets',
    monthly_savings: 'Monthly Savings', this_month: 'This month',
    funded: '% funded', completed: 'Completed', closing_in: 'Closing in',
    in_motion: 'In motion', getting_started: 'Getting started',
    tap_pocket: 'Tap a pocket to see details', total_label: 'total',
    priority_high: 'High', priority_medium: 'Medium', priority_low: 'Low',
    goal_cat_home: 'Home', goal_cat_car: 'Car', goal_cat_travel: 'Travel',
    goal_cat_debt: 'Debt', goal_cat_emergency: 'Emergency', goal_cat_other: 'Other',
    goal_name: 'Goal name', goal_target: 'Target amount',
    goal_already_saved: 'Already saved', goal_monthly: 'Monthly contribution (optional)',
    goal_deadline: 'Deadline', goal_priority: 'Priority', goal_category: 'Category',
    goal_note: 'Note', save_goal: 'Save Goal', create_goal: 'Create Goal',
    make_primary: 'Make primary', add_money: 'Add money',
    monthly_transfer: 'Monthly transfer', added_this_month: 'Added this month',
    next_milestone: 'Next milestone', at_current_pace: 'At current pace',
    financial_health: 'Financial Health Score', spending_habits: 'Spending habits',
    savings_rate: 'Savings rate', budget_adherence: 'Budget adherence',
    key_insights: 'Key insights', your_achievements: 'Your achievements',
    insight_spent_less_food_week: "You've spent {percent}% less on {category} this week. Great job!",
    profile: 'Profile', account: 'Account', preferences: 'Preferences',
    data_section: 'Data', support: 'Support',
    edit_profile: 'Edit Profile', payment_methods: 'Payment Methods',
    privacy_security: 'Privacy & Security', notifications: 'Notifications',
    dark_mode: 'Dark Mode', language: 'Language', currency: 'Currency',
    manage_categories: 'Manage Categories',
    export_data: 'Export Data', generate_report: 'Generate Report',
    backup_restore: 'Backup & Restore', help_center: 'Help Center',
    app_settings: 'App Settings', logout: 'Log Out', goal_progress: 'Goal Progress',
    face_id_on: 'Face ID enabled', face_id_off: 'Face ID disabled',
    digest_on: 'Weekly digest active', digest_off: 'Weekly digest off',
    add_expense: 'Add Expense', add_income: 'Add Income',
    expense: 'Expense', amount: 'Amount', category: 'Category',
    description: 'Description', date: 'Date',
    scan_qr: 'Scan QR / Check', upload_screenshot: 'Upload screenshot',
    voice_input: 'Voice input', enter_manually: 'Enter manually',
    instant: 'Instant', photo: 'Photo', speak: 'Speak', manual: 'Manual',
    back_to_ai: 'Back to AI options', save_btn: 'Save',
    top_up: 'Top Up', top_up_subtitle: 'Add funds to your balance or goal',
    quick_amounts: 'Quick amounts', select_goal: 'Select goal (optional)',
    confirm_top_up: 'Confirm Top Up',
    select_language: 'Select Language', select_currency: 'Select Currency',
    cancel: 'Cancel', no_goal: 'No goal',
    pocket_details: 'Pocket Details', progress: 'Progress',
    header_home: 'Budget Tracker', header_home_sub: 'Your financial overview',
    header_budget: 'Budget', header_budget_sub: 'Track and review monthly spending',
    header_insights: 'Insights', header_insights_sub: 'Signals and financial nudges',
    header_goals: 'Goals', header_goals_sub: 'Plan, prioritize, and fund your next milestones',
    header_profile: 'Profile', header_profile_sub: 'Manage your account and settings',
    add_transaction: 'Add Transaction', use_ai_or_fill: 'Use AI or fill manually',
    auto_detect: 'Auto detect amount and category',
    extract_from_image: 'Extract expense from image',
    convert_speech: 'Convert speech to transaction',
    type_manually: 'Type amount and category yourself',
    wallet: 'Wallet',
  },
  ru: {
    nav_home: 'Главная', nav_budget: 'Бюджет', nav_insights: 'Аналитика',
    nav_goals: 'Цели', nav_profile: 'Профиль',
    total_balance: 'Общий баланс', income: 'Доходы', expenses: 'Расходы',
    budget_overview: 'Бюджет', recent_activity: 'Последние операции',
    view_all: 'Все', smart_rec: 'Умная рекомендация', greeting: 'Привет',
    transactions: 'Транзакции', today: 'Сегодня', yesterday: 'Вчера',
    all: 'Все', spent: 'Потрачено', monthly_summary: 'Итоги месяца',
    no_transactions: 'Нет транзакций',
    cat_food: 'Еда', cat_transport: 'Транспорт', cat_shopping: 'Покупки',
    cat_bills: 'Счета', cat_income: 'Доход',
    goals: 'Цели', my_pockets: 'Мои копилки', create_pocket: 'Создать копилку',
    new_goal: 'Новая цель', primary_label: 'Главная', saved: 'Накоплено',
    target: 'Цель', remaining: 'Осталось', projected_finish: 'Прогноз',
    add_funds_btn: 'Пополнить', details: 'Детали', active_pockets: 'активных копилок',
    monthly_savings: 'Ежемесячные сбережения', this_month: 'В этом месяце',
    funded: '% накоплено', completed: 'Выполнено', closing_in: 'Почти готово',
    in_motion: 'В процессе', getting_started: 'Начинаем',
    tap_pocket: 'Нажмите на копилку', total_label: 'всего',
    priority_high: 'Высокий', priority_medium: 'Средний', priority_low: 'Низкий',
    goal_cat_home: 'Жильё', goal_cat_car: 'Авто', goal_cat_travel: 'Путешествие',
    goal_cat_debt: 'Долг', goal_cat_emergency: 'Резерв', goal_cat_other: 'Другое',
    goal_name: 'Название цели', goal_target: 'Целевая сумма',
    goal_already_saved: 'Уже накоплено', goal_monthly: 'Ежемесячный взнос (необязательно)',
    goal_deadline: 'Срок', goal_priority: 'Приоритет', goal_category: 'Категория',
    goal_note: 'Заметка', save_goal: 'Сохранить цель', create_goal: 'Создать цель',
    make_primary: 'Сделать главной', add_money: 'Пополнить',
    monthly_transfer: 'Ежемесячный взнос', added_this_month: 'Добавлено в этом месяце',
    next_milestone: 'Следующий рубеж', at_current_pace: 'При текущем темпе',
    financial_health: 'Финансовое здоровье', spending_habits: 'Расходные привычки',
    savings_rate: 'Норма сбережений', budget_adherence: 'Соблюдение бюджета',
    key_insights: 'Ключевые выводы', your_achievements: 'Ваши достижения',
    insight_spent_less_food_week: 'На этой неделе вы потратили на {percent}% меньше на категорию «{category}». Отличная работа!',
    profile: 'Профиль', account: 'Аккаунт', preferences: 'Настройки',
    data_section: 'Данные', support: 'Поддержка',
    edit_profile: 'Редактировать профиль', payment_methods: 'Способы оплаты',
    privacy_security: 'Конфиденциальность', notifications: 'Уведомления',
    dark_mode: 'Тёмный режим', language: 'Язык', currency: 'Валюта',
    manage_categories: 'Управление категориями',
    export_data: 'Экспорт данных', generate_report: 'Создать отчёт',
    backup_restore: 'Резервная копия', help_center: 'Справка',
    app_settings: 'Настройки', logout: 'Выйти', goal_progress: 'Прогресс целей',
    face_id_on: 'Face ID включён', face_id_off: 'Face ID выключен',
    digest_on: 'Еженедельный отчёт активен', digest_off: 'Отчёт отключён',
    add_expense: 'Добавить расход', add_income: 'Добавить доход',
    expense: 'Расход', amount: 'Сумма', category: 'Категория',
    description: 'Описание', date: 'Дата',
    scan_qr: 'Сканировать QR / Чек', upload_screenshot: 'Загрузить скриншот',
    voice_input: 'Голосовой ввод', enter_manually: 'Ввести вручную',
    instant: 'Быстро', photo: 'Фото', speak: 'Голос', manual: 'Вручную',
    back_to_ai: 'Назад к ИИ', save_btn: 'Сохранить',
    top_up: 'Пополнение', top_up_subtitle: 'Пополнить баланс или копилку',
    quick_amounts: 'Быстрые суммы', select_goal: 'Выберите копилку (необязательно)',
    confirm_top_up: 'Подтвердить пополнение',
    select_language: 'Выберите язык', select_currency: 'Выберите валюту',
    cancel: 'Отмена', no_goal: 'Без цели',
    pocket_details: 'Детали копилки', progress: 'Прогресс',
    header_home: 'Финансы', header_home_sub: 'Ваш финансовый обзор',
    header_budget: 'Бюджет', header_budget_sub: 'Просмотр расходов за месяц',
    header_insights: 'Аналитика', header_insights_sub: 'Сигналы и финансовые подсказки',
    header_goals: 'Цели', header_goals_sub: 'Планируйте и финансируйте цели',
    header_profile: 'Профиль', header_profile_sub: 'Настройки аккаунта',
    add_transaction: 'Добавить транзакцию', use_ai_or_fill: 'ИИ или вручную',
    auto_detect: 'Автоопределение суммы и категории',
    extract_from_image: 'Извлечь расход из изображения',
    convert_speech: 'Преобразовать речь в транзакцию',
    type_manually: 'Ввести сумму и категорию вручную',
    wallet: 'Кошелёк',
  },
  kk: {
    nav_home: 'Басты бет', nav_budget: 'Бюджет', nav_insights: 'Талдау',
    nav_goals: 'Мақсаттар', nav_profile: 'Профиль',
    total_balance: 'Жалпы баланс', income: 'Кіріс', expenses: 'Шығыс',
    budget_overview: 'Бюджет', recent_activity: 'Соңғы операциялар',
    view_all: 'Барлығы', smart_rec: 'Ақылды кеңес', greeting: 'Сәлем',
    transactions: 'Транзакциялар', today: 'Бүгін', yesterday: 'Кеше',
    all: 'Барлығы', spent: 'Жұмсалды', monthly_summary: 'Ай қорытындысы',
    no_transactions: 'Транзакция жоқ',
    cat_food: 'Тамақ', cat_transport: 'Көлік', cat_shopping: 'Шоппинг',
    cat_bills: 'Шоттар', cat_income: 'Табыс',
    goals: 'Мақсаттар', my_pockets: 'Менің қалталарым', create_pocket: 'Қалта құру',
    new_goal: 'Жаңа мақсат', primary_label: 'Басты', saved: 'Жиналды',
    target: 'Мақсат', remaining: 'Қалды', projected_finish: 'Болжам',
    add_funds_btn: 'Толықтыру', details: 'Толығырақ', active_pockets: 'белсенді қалта',
    monthly_savings: 'Ай сайынғы жинақ', this_month: 'Осы айда',
    funded: '% жиналды', completed: 'Аяқталды', closing_in: 'Дерлік дайын',
    in_motion: 'Жүріп жатыр', getting_started: 'Бастаймыз',
    tap_pocket: 'Қалтаны басыңыз', total_label: 'барлығы',
    priority_high: 'Жоғары', priority_medium: 'Орта', priority_low: 'Төмен',
    goal_cat_home: 'Баспана', goal_cat_car: 'Көлік', goal_cat_travel: 'Саяхат',
    goal_cat_debt: 'Қарыз', goal_cat_emergency: 'Резерв', goal_cat_other: 'Басқа',
    goal_name: 'Мақсат атауы', goal_target: 'Мақсат сомасы',
    goal_already_saved: 'Қазірдің өзінде жиналды', goal_monthly: 'Ай сайынғы жарна (міндетті емес)',
    goal_deadline: 'Мерзім', goal_priority: 'Басымдық', goal_category: 'Санат',
    goal_note: 'Ескертпе', save_goal: 'Мақсатты сақтау', create_goal: 'Мақсат құру',
    make_primary: 'Басты ету', add_money: 'Толықтыру',
    monthly_transfer: 'Ай сайынғы жарна', added_this_month: 'Осы айда қосылды',
    next_milestone: 'Келесі белес', at_current_pace: 'Ағымдағы қарқынмен',
    financial_health: 'Қаржылық денсаулық', spending_habits: 'Шығын әдеттері',
    savings_rate: 'Жинақ нормасы', budget_adherence: 'Бюджетті сақтау',
    key_insights: 'Негізгі тұжырымдар', your_achievements: 'Жетістіктеріңіз',
    insight_spent_less_food_week: 'Осы аптада «{category}» санатына {percent}% аз жұмсадыңыз. Керемет нәтиже!',
    profile: 'Профиль', account: 'Аккаунт', preferences: 'Баптаулар',
    data_section: 'Деректер', support: 'Қолдау',
    edit_profile: 'Профильді өңдеу', payment_methods: 'Төлем әдістері',
    privacy_security: 'Құпиялылық', notifications: 'Хабарландырулар',
    dark_mode: 'Қараңғы режим', language: 'Тіл', currency: 'Валюта',
    manage_categories: 'Санаттарды басқару',
    export_data: 'Деректерді экспорттау', generate_report: 'Есеп құру',
    backup_restore: 'Сақтық көшірме', help_center: 'Анықтама',
    app_settings: 'Баптаулар', logout: 'Шығу', goal_progress: 'Мақсат прогресі',
    face_id_on: 'Face ID қосылған', face_id_off: 'Face ID өшірілген',
    digest_on: 'Апталық есеп белсенді', digest_off: 'Есеп өшірілген',
    add_expense: 'Шығын қосу', add_income: 'Кіріс қосу',
    expense: 'Шығын', amount: 'Сома', category: 'Санат',
    description: 'Сипаттама', date: 'Күн',
    scan_qr: 'QR / Чекті сканерлеу', upload_screenshot: 'Скриншот жүктеу',
    voice_input: 'Дауыспен енгізу', enter_manually: 'Қолмен енгізу',
    instant: 'Жылдам', photo: 'Фото', speak: 'Дауыс', manual: 'Қолмен',
    back_to_ai: 'ЖИ-ға оралу', save_btn: 'Сақтау',
    top_up: 'Толықтыру', top_up_subtitle: 'Балансты немесе қалтаны толықтыру',
    quick_amounts: 'Жылдам сомалар', select_goal: 'Қалтаны таңдаңыз (міндетті емес)',
    confirm_top_up: 'Толықтыруды растау',
    select_language: 'Тілді таңдаңыз', select_currency: 'Валюта таңдаңыз',
    cancel: 'Болдырмау', no_goal: 'Мақсатсыз',
    pocket_details: 'Қалта мәліметтері', progress: 'Прогресс',
    header_home: 'Қаржы', header_home_sub: 'Қаржылық шолуыңыз',
    header_budget: 'Бюджет', header_budget_sub: 'Ай шығындарын бақылау',
    header_insights: 'Талдау', header_insights_sub: 'Сигналдар мен кеңестер',
    header_goals: 'Мақсаттар', header_goals_sub: 'Мақсаттарды жоспарлаңыз',
    header_profile: 'Профиль', header_profile_sub: 'Аккаунт баптаулары',
    add_transaction: 'Транзакция қосу', use_ai_or_fill: 'ЖИ немесе қолмен',
    auto_detect: 'Санат пен соманы автоанықтау',
    extract_from_image: 'Суреттен шығынды алу',
    convert_speech: 'Сөзді транзакцияға айналдыру',
    type_manually: 'Санат пен соманы қолмен енгізу',
    wallet: 'Әмиян',
  },
} as const;

type TranslationKey = keyof typeof translations.en;

// ── goalMomentumKey (returns TranslationKey for t()) ──────────────────────────
function goalMomentumKey(goal: Goal): TranslationKey {
  const progress = goalProgress(goal);
  if (progress >= 100) return 'completed';
  if (progress >= 75) return 'closing_in';
  if (progress >= 40) return 'in_motion';
  return 'getting_started';
}

type Tab = 'home' | 'budget' | 'insights' | 'goals' | 'profile';
type TxCategory = 'Food' | 'Transport' | 'Shopping' | 'Bills' | 'Income';
type GoalPriority = 'High' | 'Medium' | 'Low';
type GoalCategory = 'Home' | 'Car' | 'Travel' | 'Debt' | 'Emergency' | 'Other';

type CategoryItem = {
  id: TxCategory;
  label: string;
  icon: ReactNode;
  bg: string;
  color: string;
};

type Transaction = {
  id: number;
  name: string;
  category: TxCategory;
  amount: number;
  time: string;
  date: string;
};

type Goal = {
  id: number;
  title: string;
  category: GoalCategory;
  target: number;
  saved: number;
  deadline: string;
  priority: GoalPriority;
  monthlyContribution: number;
  thisMonthSaved: number;
  primary?: boolean;
};

function initialTabFromLocation(): Tab {
  if (typeof window === 'undefined') return 'home';
  const searchTab = new URL(window.location.href).searchParams.get('tab');
  if (searchTab === 'home' || searchTab === 'budget' || searchTab === 'insights' || searchTab === 'goals' || searchTab === 'profile') {
    return searchTab;
  }
  return 'home';
}

function isoDateWithOffset(days: number) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function isoDateWithMonthOffset(months: number) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setMonth(date.getMonth() + months);
  return date.toISOString().slice(0, 10);
}

const expenseCategories: CategoryItem[] = [
  { id: 'Food', label: 'Food', icon: <IcFood size={20} />, bg: '#FEF3C7', color: '#B45309' },
  { id: 'Transport', label: 'Transport', icon: <IcCar size={20} />, bg: '#E0F2FE', color: '#0369A1' },
  { id: 'Shopping', label: 'Shopping', icon: <IcBag size={20} />, bg: '#EDE9FE', color: '#6D28D9' },
  { id: 'Bills', label: 'Bills', icon: <IcBolt size={20} />, bg: '#FFE4E6', color: '#BE123C' },
];

const incomeCategories: CategoryItem[] = [
  { id: 'Income', label: 'Salary', icon: <IcMoney size={20} />, bg: '#D1FAE5', color: '#047857' },
  { id: 'Income', label: 'Freelance', icon: <IcWallet size={20} />, bg: '#DBEAFE', color: '#1D4ED8' },
  { id: 'Income', label: 'Gift', icon: <IcSpark size={20} />, bg: '#FEF3C7', color: '#B45309' },
  { id: 'Income', label: 'Invest', icon: <IcGoal size={20} />, bg: '#E0F2FE', color: '#075985' },
];

const seedTransactions: Transaction[] = [
  { id: 1, name: 'Whole Foods Market', category: 'Food', amount: -85.3, time: '2:45 PM', date: isoDateWithOffset(0) },
  { id: 2, name: 'Uber Ride', category: 'Transport', amount: -18.5, time: '11:20 AM', date: isoDateWithOffset(0) },
  { id: 3, name: 'Amazon Purchase', category: 'Shopping', amount: -124.99, time: '6:15 PM', date: isoDateWithOffset(-1) },
  { id: 4, name: 'Electric Bill', category: 'Bills', amount: -142, time: '12:00 PM', date: isoDateWithOffset(-1) },
  { id: 5, name: 'Freelance Income', category: 'Income', amount: 850, time: '9:00 AM', date: isoDateWithOffset(-2) },
];

const seedGoals: Goal[] = [
  { id: 101, title: 'Own Home', category: 'Home', target: 15000, saved: 12000, deadline: isoDateWithMonthOffset(44), priority: 'High', monthlyContribution: 193, thisMonthSaved: 193, primary: true },
  { id: 102, title: 'Car Purchase', category: 'Car', target: 3000, saved: 1350, deadline: isoDateWithMonthOffset(15), priority: 'High', monthlyContribution: 110, thisMonthSaved: 110 },
  { id: 103, title: 'Japan Travel', category: 'Travel', target: 2500, saved: 900, deadline: isoDateWithMonthOffset(8), priority: 'Medium', monthlyContribution: 180, thisMonthSaved: 180 },
  { id: 104, title: 'Pay Off Credit Card', category: 'Debt', target: 2000, saved: 300, deadline: isoDateWithMonthOffset(6), priority: 'High', monthlyContribution: 260, thisMonthSaved: 260 },
  { id: 105, title: 'Emergency Fund', category: 'Emergency', target: 4000, saved: 700, deadline: isoDateWithMonthOffset(18), priority: 'Low', monthlyContribution: 140, thisMonthSaved: 140 },
];

function categoryMetaById(id: TxCategory): CategoryItem {
  if (id === 'Income') return incomeCategories[0];
  return expenseCategories.find((c) => c.id === id) ?? expenseCategories[0];
}

function transactionDayLabel(dateString: string, lang: Lang) {
  const today = isoDateWithOffset(0);
  const yesterday = isoDateWithOffset(-1);

  if (dateString === today) return translations[lang].today;
  if (dateString === yesterday) return translations[lang].yesterday;

  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat(lang === 'kk' ? 'kk-KZ' : lang === 'ru' ? 'ru-RU' : 'en-US', { month: 'long', day: 'numeric' }).format(date);
}

function monthsUntil(dateString: string) {
  const today = new Date();
  const deadline = new Date(`${dateString}T12:00:00`);
  const diffMs = deadline.getTime() - today.getTime();
  const diffDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  return Math.max(1, Math.ceil(diffDays / 30));
}

function goalProgress(goal: Goal) {
  return Math.min(100, Math.round((goal.saved / goal.target) * 100));
}

function goalRemaining(goal: Goal) {
  return Math.max(0, goal.target - goal.saved);
}

function priorityClass(priority: GoalPriority) {
  if (priority === 'High') return 'priority-chip priority-chip--high';
  if (priority === 'Medium') return 'priority-chip priority-chip--medium';
  return 'priority-chip priority-chip--low';
}

function priorityRank(priority: GoalPriority) {
  if (priority === 'High') return 3;
  if (priority === 'Medium') return 2;
  return 1;
}

function goalCategoryMeta(category: GoalCategory) {
  if (category === 'Home') return { icon: <IcHome size={20} />, bg: '#DBEAFE', color: '#1D4ED8' };
  if (category === 'Car') return { icon: <IcCar size={20} />, bg: '#E0F2FE', color: '#0369A1' };
  if (category === 'Travel') return { icon: <IcSpark size={20} />, bg: '#EDE9FE', color: '#6D28D9' };
  if (category === 'Debt') return { icon: <IcBolt size={20} />, bg: '#FFE4E6', color: '#BE123C' };
  if (category === 'Emergency') return { icon: <IcWallet size={20} />, bg: '#D1FAE5', color: '#047857' };
  return { icon: <IcGoal size={20} />, bg: '#F1F5F9', color: '#475569' };
}

function goalTheme(goal: Goal) {
  const progress = goalProgress(goal);
  if (goal.category === 'Home') {
    return {
      accent: progress >= 70 ? '#2563EB' : '#60A5FA',
      accentSoft: 'rgba(191, 219, 254, 0.42)',
      accentBg: 'rgba(239, 246, 255, 0.94)',
    };
  }
  if (goal.category === 'Car') {
    return {
      accent: progress >= 70 ? '#0284C7' : '#38BDF8',
      accentSoft: 'rgba(186, 230, 253, 0.42)',
      accentBg: 'rgba(240, 249, 255, 0.94)',
    };
  }
  if (goal.category === 'Travel') {
    return {
      accent: progress >= 70 ? '#7C3AED' : '#A78BFA',
      accentSoft: 'rgba(221, 214, 254, 0.42)',
      accentBg: 'rgba(245, 243, 255, 0.94)',
    };
  }
  if (goal.category === 'Debt') {
    return {
      accent: progress >= 70 ? '#E11D48' : '#FB7185',
      accentSoft: 'rgba(253, 164, 175, 0.34)',
      accentBg: 'rgba(255, 241, 242, 0.95)',
    };
  }
  if (goal.category === 'Emergency') {
    return {
      accent: progress >= 70 ? '#059669' : '#34D399',
      accentSoft: 'rgba(167, 243, 208, 0.36)',
      accentBg: 'rgba(236, 253, 245, 0.94)',
    };
  }
  return {
    accent: progress >= 70 ? '#475569' : '#94A3B8',
    accentSoft: 'rgba(226, 232, 240, 0.5)',
    accentBg: 'rgba(248, 250, 252, 0.95)',
  };
}

function goalProjectedMonths(goal: Goal) {
  return Math.max(1, Math.ceil(goalRemaining(goal) / Math.max(goal.monthlyContribution, 1)));
}

function goalProjectedDateLabel(goal: Goal, lang: Lang) {
  const projected = new Date();
  projected.setMonth(projected.getMonth() + goalProjectedMonths(goal));
  return new Intl.DateTimeFormat(lang === 'kk' ? 'kk-KZ' : lang === 'ru' ? 'ru-RU' : 'en-US', { month: 'short', year: 'numeric' }).format(projected);
}

function goalNextMilestone(goal: Goal) {
  const progress = goalProgress(goal);
  if (progress >= 100) return null;
  const nextStep = Math.min(100, Math.ceil((progress + 1) / 10) * 10);
  const amount = Math.ceil((goal.target * nextStep) / 100);
  return {
    percent: nextStep,
    amount,
    remaining: Math.max(0, amount - goal.saved),
  };
}

function goalIllustrationShape(category: GoalCategory) {
  if (category === 'Home') {
    return 'M100 16 30 70v78c0 14 10 24 24 24h30v-48c0-8 6-14 14-14h4c8 0 14 6 14 14v48h30c14 0 24-10 24-24V70L100 16Z';
  }
  if (category === 'Car') {
    return 'M56 86c4-12 14-20 26-20h36c12 0 22 8 26 20l8 24h6c10 0 18 8 18 18v18h-20v-10H44v10H24v-18c0-10 8-18 18-18h6l8-24Z';
  }
  if (category === 'Travel') {
    return 'M66 36h68c16 0 28 12 28 28v72c0 16-12 28-28 28H66c-16 0-28-12-28-28V64c0-16 12-28 28-28ZM84 36v-8c0-8 6-14 14-14h4c8 0 14 6 14 14v8';
  }
  if (category === 'Debt') {
    return 'M38 54c0-14 10-24 24-24h76c14 0 24 10 24 24v72c0 14-10 24-24 24H62c-14 0-24-10-24-24V54Zm18 22h88v16H56V76Zm0 30h54v14H56v-14Z';
  }
  if (category === 'Emergency') {
    return 'M100 18 154 38v44c0 42-22 70-54 88-32-18-54-46-54-88V38l54-20Z';
  }
  return 'M54 28h92c18 0 30 12 30 30v64c0 18-12 30-30 30H54c-18 0-30-12-30-30V58c0-18 12-30 30-30Z';
}

function GoalProgressIllustration({ goal }: { goal: Goal }) {
  const progress = goalProgress(goal);
  const remaining = Math.max(0, 100 - progress);
  const fillHeight = 146 * (progress / 100);
  const fillY = 170 - fillHeight;
  const waterlineTop = Math.max(18, Math.min(82, (fillY / 180) * 100));
  const clipId = `goal-shape-${goal.id}`;
  const gradientId = `goal-fill-${goal.id}`;
  const theme = goalTheme(goal);
  const accent = theme.accent;

  return (
    <div
      className="goal-visual"
      style={{
        ['--goal-accent' as string]: accent,
        ['--goal-accent-soft' as string]: theme.accentSoft,
        ['--goal-waterline' as string]: `${waterlineTop}%`,
      }}
    >
      <svg viewBox="0 0 200 180" aria-hidden="true">
        <defs>
          <clipPath id={clipId}>
            <path d={goalIllustrationShape(goal.category)} />
          </clipPath>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor={accent} />
          </linearGradient>
        </defs>
        <path
          d={goalIllustrationShape(goal.category)}
          fill="rgba(255,255,255,0.96)"
          stroke="rgba(148,163,184,0.36)"
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <g clipPath={`url(#${clipId})`}>
          <rect x="18" y={fillY} width="164" height={fillHeight} fill={`url(#${gradientId})`} opacity="0.96" />
          <rect x="18" y={fillY - 2} width="164" height="4" fill="rgba(255,255,255,0.52)" />
        </g>
      </svg>
      <span className="goal-visual__badge goal-visual__badge--light">{remaining}%</span>
      <span className="goal-visual__badge goal-visual__badge--accent">{progress}%</span>
    </div>
  );
}

function LiquidCard({ className = '', style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  return <section className={`card ${className}`} style={style}>{children}</section>;
}

export default function App() {
  const [tab, setTab] = useState<Tab>(() => initialTabFromLocation());
  const [lang, setLang] = useState<Lang>('en');
  const [currency, setCurrency] = useState<Currency>('KZT');
  const [showLangModal, setShowLangModal] = useState(false);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [showTopUpModal, setShowTopUpModal] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState('');
  const [topUpGoalId, setTopUpGoalId] = useState<number | null>(null);

  const t = (key: TranslationKey) => translations[lang][key];
  const tf = (key: TranslationKey, vars: Record<string, string | number>) => {
    let template = t(key);
    for (const [name, value] of Object.entries(vars)) {
      template = template.replace(`{${name}}`, String(value));
    }
    return template;
  };

  const openTopUpModal = (goalId: number | null = null, presetAmount = '') => {
    setTopUpGoalId(goalId);
    setTopUpAmount(presetAmount);
    setShowTopUpModal(true);
  };

  const closeTopUpModal = () => {
    setTopUpAmount('');
    setTopUpGoalId(null);
    setShowTopUpModal(false);
  };

  const formatAmount = (value: number) => {
    const abs = Math.abs(value);
    const formatted = abs.toLocaleString(
      lang === 'kk' ? 'kk-KZ' : lang === 'ru' ? 'ru-RU' : 'en-US',
      { maximumFractionDigits: 2 }
    );
    if (currency === 'KZT') return `${formatted} ₸`;
    if (currency === 'RUB') return `${formatted} ₽`;
    return `$${formatted}`;
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null);
  const [aiStep, setAiStep] = useState<'methods' | 'form'>('methods');
  const [transactions, setTransactions] = useState(seedTransactions);
  const [goals, setGoals] = useState(seedGoals);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('0');
  const [category, setCategory] = useState<TxCategory>('Food');
  const [entryType, setEntryType] = useState<'expense' | 'income'>('expense');
  const [goalTitle, setGoalTitle] = useState('');
  const [goalTarget, setGoalTarget] = useState('5000');
  const [goalSaved, setGoalSaved] = useState('0');
  const [goalDeadline, setGoalDeadline] = useState(isoDateWithMonthOffset(12));
  const [goalPriority, setGoalPriority] = useState<GoalPriority>('Medium');
  const [goalCategory, setGoalCategory] = useState<GoalCategory>('Other');
  const [goalMonthly, setGoalMonthly] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [faceIdEnabled] = useState(false);
  const [weeklyDigestEnabled, setWeeklyDigestEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const totalSpent = useMemo(
    () => transactions.filter((t) => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0),
    [transactions],
  );
  const totalIncome = useMemo(
    () => transactions.filter((t) => t.amount > 0).reduce((s, t) => s + t.amount, 0),
    [transactions],
  );
  const totalGoalTarget = useMemo(() => goals.reduce((sum, goal) => sum + goal.target, 0), [goals]);
  const groupedTransactions = useMemo(() => {
    const groups: Array<{ label: string; items: Transaction[] }> = [];
    const seen = new Map<string, Transaction[]>();

    for (const transaction of transactions) {
      const key = transaction.date;
      if (!seen.has(key)) seen.set(key, []);
      seen.get(key)?.push(transaction);
    }

    for (const [date, items] of seen.entries()) {
      groups.push({ label: transactionDayLabel(date, lang), items });
    }

    return groups;
  }, [transactions, lang]);
  const sortedGoals = useMemo(
    () =>
      [...goals].sort((a, b) => {
        if (a.primary && !b.primary) return -1;
        if (!a.primary && b.primary) return 1;
        if (priorityRank(a.priority) !== priorityRank(b.priority)) {
          return priorityRank(b.priority) - priorityRank(a.priority);
        }
        return goalRemaining(b) - goalRemaining(a);
      }),
    [goals],
  );
  const primaryGoal = useMemo(() => sortedGoals.find((goal) => goal.primary) ?? sortedGoals[0], [sortedGoals]);
  const activeGoalsCount = useMemo(() => goals.filter((goal) => goal.saved < goal.target).length, [goals]);
  const totalGoalSaved = useMemo(() => goals.reduce((sum, goal) => sum + goal.saved, 0), [goals]);
  const thisMonthGoalsAdded = useMemo(() => goals.reduce((sum, goal) => sum + goal.thisMonthSaved, 0), [goals]);
  const totalGoalProgress = useMemo(
    () => (totalGoalTarget > 0 ? Math.min(100, Math.round((totalGoalSaved / totalGoalTarget) * 100)) : 0),
    [totalGoalSaved, totalGoalTarget],
  );
  const selectedGoal = useMemo(
    () => goals.find((goal) => goal.id === selectedGoalId) ?? null,
    [goals, selectedGoalId],
  );

  const addTransaction = () => {
    const parsed = Number(amount);
    if (!name || Number.isNaN(parsed) || parsed <= 0) return;

    const finalCategory = entryType === 'income' ? 'Income' : category;
    setTransactions((prev) => [
      {
        id: Date.now(),
        name,
        amount: entryType === 'income' ? parsed : -parsed,
        category: finalCategory,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: isoDateWithOffset(0),
      },
      ...prev,
    ]);

    setName('');
    setAmount('0');
    setCategory('Food');
    setEntryType('expense');
    setShowAddModal(false);
    setAiStep('methods');
  };

  const cyclePriority = (goalId: number) => {
    setGoals((prev) =>
      prev.map((goal) => {
        if (goal.id !== goalId) return goal;
        const nextPriority: Record<GoalPriority, GoalPriority> = { Low: 'Medium', Medium: 'High', High: 'Low' };
        return { ...goal, priority: nextPriority[goal.priority] };
      }),
    );
  };

  const setPrimaryGoal = (goalId: number) => {
    setGoals((prev) => prev.map((goal) => ({ ...goal, primary: goal.id === goalId })));
  };

  const addFundsToGoal = (goalId: number, amountToAdd = 500) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === goalId
          ? {
              ...goal,
              saved: Math.min(goal.target, goal.saved + amountToAdd),
              thisMonthSaved: goal.thisMonthSaved + amountToAdd,
            }
          : goal,
      ),
    );
  };

  const createGoal = () => {
    const parsedTarget = Number(goalTarget);
    const parsedSaved = Number(goalSaved);
    const parsedMonthly = Number(goalMonthly);

    if (!goalTitle || Number.isNaN(parsedTarget) || parsedTarget <= 0 || Number.isNaN(parsedSaved) || parsedSaved < 0) return;

    const draftGoal: Goal = {
      id: Date.now(),
      title: goalTitle,
      category: goalCategory,
      target: parsedTarget,
      saved: parsedSaved,
      deadline: goalDeadline,
      priority: goalPriority,
      monthlyContribution:
        !Number.isNaN(parsedMonthly) && parsedMonthly > 0
          ? parsedMonthly
          : Math.ceil(Math.max(0, parsedTarget - parsedSaved) / monthsUntil(goalDeadline)),
      thisMonthSaved: 0,
      primary: goals.length === 0,
    };

    setGoals((prev) => [...prev, draftGoal]);
    setGoalTitle('');
    setGoalTarget('5000');
    setGoalSaved('0');
    setGoalDeadline(isoDateWithMonthOffset(12));
    setGoalPriority('Medium');
    setGoalCategory('Other');
    setGoalMonthly('');
    setShowGoalModal(false);
  };

  const confirmTopUp = () => {
    const parsed = Number(topUpAmount.replace(',', '.'));
    if (Number.isNaN(parsed) || parsed <= 0) return;
    if (topUpGoalId !== null) {
      addFundsToGoal(topUpGoalId, parsed);
    }
    // Add as income transaction
    setTransactions((prev) => [
      {
        id: Date.now(),
        name: t('top_up'),
        category: 'Income',
        amount: parsed,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: isoDateWithOffset(0),
      },
      ...prev,
    ]);
    closeTopUpModal();
  };

  const Screen = () => {
    if (tab === 'home') {
      return (
        <div className="stack">
          <LiquidCard className="hero-card">
            <div className="row between">
              <div>
                <button className="home-balance-trigger" onClick={() => openTopUpModal()} aria-label={t('top_up')}>
                  <p className="eyebrow">{t('total_balance')}</p>
                  <h1>{formatAmount(totalIncome - totalSpent + 3450)}</h1>
                </button>
              </div>
              <div className="liquid-icon"><IcWallet size={17} /></div>
            </div>
            <div className="grid two mt16">
              <div className="metric-tile">
                <p className="muted">{t('income')}</p>
                <strong className="ok">+{formatAmount(totalIncome)}</strong>
              </div>
              <div className="metric-tile">
                <p className="muted">{t('expenses')}</p>
                <strong className="bad">-{formatAmount(totalSpent)}</strong>
              </div>
            </div>
          </LiquidCard>

          <LiquidCard>
            <div className="row between">
              <h3>{t('primary_label')} {t('goals')}</h3>
              <strong>65%</strong>
            </div>
            <p className="muted">Car Purchase</p>
            <div className="bar mt12"><span style={{ width: '65%' }} /></div>
          </LiquidCard>

          <LiquidCard>
            <div className="row between">
              <h3>{t('recent_activity')}</h3>
              <button className="ghost" onClick={() => setTab('budget')}>{t('view_all')}</button>
            </div>
            <div className="stack sm mt12">
              {transactions.slice(0, 3).map((tx) => {
                const meta = categoryMetaById(tx.category);
                return (
                  <div key={tx.id} className="tx">
                    <div className="tx-icon" style={{ backgroundColor: meta.bg, color: meta.color }}>{meta.icon}</div>
                    <div className="grow">
                      <p>{tx.name}</p>
                      <small>{t(`cat_${tx.category.toLowerCase()}` as any)} • {tx.time}</small>
                    </div>
                    <strong className={tx.amount > 0 ? 'ok' : ''}>
                      {tx.amount > 0 ? '+' : '-'}{formatAmount(tx.amount)}
                    </strong>
                  </div>
                );
              })}
            </div>
          </LiquidCard>
        </div>
      );
    }

    if (tab === 'budget') {
      return (
        <div className="stack">
          <LiquidCard className="summary-card">
            <div className="row between">
              <div>
                <p className="eyebrow summary-eyebrow">{t('budget_overview')}</p>
                <h3>{t('monthly_summary')}</h3>
              </div>
              <div className="summary-chip">
                {new Intl.DateTimeFormat(lang === 'kk' ? 'kk-KZ' : lang === 'ru' ? 'ru-RU' : 'en-US', { month: 'long', year: 'numeric' }).format(new Date())}
              </div>
            </div>
            <div className="grid two mt12">
              <div className="metric-tile light summary-metric summary-metric--primary">
                <p className="muted">{t('spent')}</p>
                <strong className="bad">-{formatAmount(totalSpent)}</strong>
                <small>{t('this_month')}</small>
              </div>
              <div className="metric-tile light summary-metric">
                <p className="muted">{t('transactions')}</p>
                <strong>{transactions.length}</strong>
                <small>{t('all')}</small>
              </div>
            </div>
          </LiquidCard>

          <LiquidCard>
            <h3>{t('transactions')}</h3>
            <div className="tx-groups mt12">
              {groupedTransactions.map((group) => (
                <div key={group.label} className="tx-group">
                  <div className="tx-group__header">{group.label}</div>
                  <div className="stack sm">
                    {group.items.map((tx) => {
                      const meta = categoryMetaById(tx.category);
                      return (
                        <div key={tx.id} className="tx">
                          <div className="tx-icon" style={{ backgroundColor: meta.bg, color: meta.color }}>{meta.icon}</div>
                          <div className="grow">
                            <p>{tx.name}</p>
                            <small>{tx.time} • {t(`cat_${tx.category.toLowerCase()}` as any)}</small>
                          </div>
                          <strong className={tx.amount > 0 ? 'ok' : ''}>
                            {tx.amount > 0 ? '+' : '-'}{formatAmount(tx.amount)}
                          </strong>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </LiquidCard>
        </div>
      );
    }

    if (tab === 'insights') {
      return (
        <div className="stack">
          <LiquidCard className="hero-card">
            <div className="row between">
              <div>
                <p className="eyebrow">{t('financial_health')}</p>
                <h1>8.4 / 10</h1>
              </div>
              <div className="liquid-icon"><IcGoal size={17} /></div>
            </div>
          </LiquidCard>

          {[
            { label: t('spending_habits'), value: '86%', status: 'good' },
            { label: t('savings_rate'), value: '24%', status: 'warn' },
            { label: t('budget_adherence'), value: '92%', status: 'good' },
          ].map((insight) => (
            <LiquidCard key={insight.label}>
              <div className="row between">
                <p className="muted">{insight.label}</p>
                <span className={`status-chip status-chip--${insight.status}`}>{insight.value}</span>
              </div>
            </LiquidCard>
          ))}

          <LiquidCard>
            <h3>{t('key_insights')}</h3>
            <p className="muted mt8">
              {tf('insight_spent_less_food_week', { percent: 12, category: t('cat_food') })}
            </p>
          </LiquidCard>
        </div>
      );
    }

    if (tab === 'goals') {
      return (
        <div className="stack goals-pocket-layout">
          <LiquidCard className="goals-pocket-hero">
            <div className="row between">
              <div>
                <p className="eyebrow goals-pocket-eyebrow">{t('monthly_savings')}</p>
                <h3>{primaryGoal?.title ?? t('goals')}</h3>
                <small>{activeGoalsCount} {t('active_pockets')}</small>
              </div>
              <button className="summary-chip goals-pocket-chip" onClick={() => setShowGoalModal(true)}>{t('new_goal')}</button>
            </div>
            <div className="goals-pocket-balance">{formatAmount(totalGoalSaved)}</div>
            <div className="goals-pocket-progress">
              <div className="row between">
                <small>{t('this_month')} +{formatAmount(thisMonthGoalsAdded)}</small>
                <small>{totalGoalProgress}%</small>
              </div>
              <div className="bar goal-pocket-bar mt8"><span style={{ width: `${totalGoalProgress}%` }} /></div>
              <div className="row between mt8">
                <small>{t('saved')} {formatAmount(totalGoalSaved)}</small>
                <small>{t('goals')} {formatAmount(totalGoalTarget)}</small>
              </div>
            </div>
          </LiquidCard>

          {primaryGoal && (
            <LiquidCard
              className="goal-focus-card"
              style={{
                ['--goal-accent' as string]: goalTheme(primaryGoal).accent,
              }}
            >
              <div className="row between">
                <div className="row gap">
                  <div
                    className="goal-icon"
                    style={{
                      backgroundColor: goalCategoryMeta(primaryGoal.category).bg,
                      color: goalCategoryMeta(primaryGoal.category).color,
                    }}
                  >
                    {goalCategoryMeta(primaryGoal.category).icon}
                  </div>
                  <div>
                    <h3>{primaryGoal.title}</h3>
                    <small className="goal-focus-story">
                      +{formatAmount(primaryGoal.thisMonthSaved)} {t('this_month')}. {formatAmount(goalRemaining(primaryGoal))} {t('remaining')} {t('target').toLowerCase()}.
                    </small>
                  </div>
                </div>
                <div className="goal-badges">
                  <button className={priorityClass(primaryGoal.priority)} onClick={() => cyclePriority(primaryGoal.id)}>{t(`priority_${primaryGoal.priority.toLowerCase()}` as any)}</button>
                  <span className="goal-pocket-label">{t(goalMomentumKey(primaryGoal))}</span>
                </div>
              </div>

              <GoalProgressIllustration goal={primaryGoal} />

              <div className="goal-focus-progress-label">{t('progress')}</div>

              <div className="goal-focus-stats">
                <div>
                  <small>{t('saved')}</small>
                  <p>{formatAmount(primaryGoal.saved)}</p>
                </div>
                <div>
                  <small>{t('target')}</small>
                  <p>{formatAmount(primaryGoal.target)}</p>
                </div>
                <div>
                  <small>{t('remaining')}</small>
                  <p>{formatAmount(goalRemaining(primaryGoal))}</p>
                </div>
              </div>

              <div className="goal-card__footer mt12">
                <small>{t('projected_finish')} {goalProjectedDateLabel(primaryGoal, lang)}</small>
                <div className="goal-inline-actions">
                  <button className="goal-mini-action goal-mini-action--filled" onClick={() => openTopUpModal(primaryGoal.id, '500')}>{t('add_funds_btn')} 500</button>
                  <button className="goal-mini-action" onClick={() => setSelectedGoalId(primaryGoal.id)}>{t('details')}</button>
                </div>
              </div>
            </LiquidCard>
          )}

          <div className="section-head row between">
            <div>
              <h3>{t('my_pockets')}</h3>
              <small>{t('tap_pocket')}</small>
            </div>
            <small>{sortedGoals.length} {t('total_label')}</small>
          </div>

          <div className="goal-pocket-grid">
            {sortedGoals.map((goal) => {
              const meta = goalCategoryMeta(goal.category);
              return (
                <button
                  key={goal.id}
                  className="goal-pocket-card"
                  onClick={() => setSelectedGoalId(goal.id)}
                  style={{
                    ['--goal-accent' as string]: goalTheme(goal).accent,
                    ['--goal-accent-bg' as string]: goalTheme(goal).accentBg,
                  }}
                >
                  <div className="row between">
                    <div className="goal-pocket-icon" style={{ backgroundColor: meta.bg, color: meta.color }}>{meta.icon}</div>
                    {goal.primary ? <span className="goal-pocket-label">{t('primary_label')}</span> : <span className={priorityClass(goal.priority)}>{t(`priority_${goal.priority.toLowerCase()}` as any)}</span>}
                  </div>
                  <div className="goal-pocket-copy">
                    <p>{goal.title}</p>
                    <strong>{formatAmount(goal.saved)}</strong>
                  </div>
                  <div className="bar goal-pocket-progress-bar mt8"><span style={{ width: `${goalProgress(goal)}%` }} /></div>
                  <div className="row between mt8">
                    <small>{goalProgress(goal)}{t('funded')}</small>
                    <small>{goal.saved >= goal.target ? t('completed') : `+${formatAmount(goal.thisMonthSaved)} ${t('this_month')}`}</small>
                  </div>
                </button>
              );
            })}

            <button className="goal-pocket-create" onClick={() => setShowGoalModal(true)}>
              <span className="goal-pocket-create__plus"><IcPlus size={18} /></span>
              <span>{t('create_pocket')}</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="stack profile-layout">
        <LiquidCard className="profile-hero-card">
          <div className="row between">
            <div className="row gap">
              <div className="profile-avatar">
                <span>AM</span>
              </div>
              <div>
                <h3>Alex Morgan</h3>
                <small>alex@qarjy.ai</small>
              </div>
            </div>
            <button className="profile-chip">Premium</button>
          </div>
          <div className="profile-badges mt12">
            <span className="profile-badge">Kazakhstan</span>
            <span className="profile-badge">{currency} default</span>
            <span className="profile-badge">Sync on</span>
          </div>
        </LiquidCard>

        <LiquidCard className="profile-metrics-card">
          <div className="grid three">
            <div className="profile-metric">
              <small>{t('transactions')}</small>
              <p>{transactions.length}</p>
            </div>
            <div className="profile-metric">
              <small>{t('saved')}</small>
              <p className="ok">{formatAmount(totalIncome - totalSpent)}</p>
            </div>
            <div className="profile-metric">
              <small>{t('goal_progress')}</small>
              <p>{totalGoalProgress}%</p>
            </div>
          </div>
        </LiquidCard>

        <div className="profile-section-title">{t('account')}</div>
        <LiquidCard className="profile-group-card">
          <button className="profile-nav-row">
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcUser size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('edit_profile')}</p>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
          <button className="profile-nav-row">
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcCard size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('payment_methods')}</p>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
          <button className="profile-nav-row">
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcShield size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('privacy_security')}</p>
                <small>{faceIdEnabled ? t('face_id_on') : t('face_id_off')}</small>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
        </LiquidCard>

        <div className="profile-section-title">{t('preferences')}</div>
        <LiquidCard className="profile-group-card">
          <button className="profile-nav-row" onClick={() => setNotificationsEnabled((prev) => !prev)}>
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcBell size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('notifications')}</p>
              </div>
            </div>
            <span className={`profile-toggle ${notificationsEnabled ? 'is-on' : ''}`} />
          </button>
          <button className="profile-nav-row" onClick={() => setDarkModeEnabled((prev) => !prev)}>
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcMoon size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('dark_mode')}</p>
              </div>
            </div>
            <span className={`profile-toggle ${darkModeEnabled ? 'is-on' : ''}`} />
          </button>
          <button className="profile-nav-row" onClick={() => setShowLangModal(true)}>
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcGlobe size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('language')}</p>
                <small className="profile-nav-subtitle">
                  {lang === 'en' ? 'English' : lang === 'ru' ? 'Русский' : 'Қазақша'}
                </small>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
          <button className="profile-nav-row" onClick={() => setShowCurrencyModal(true)}>
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcWallet size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('currency')}</p>
                <small className="profile-nav-subtitle">
                  {currency === 'KZT' ? 'KZT (₸)' : currency === 'USD' ? 'USD ($)' : 'RUB (₽)'}
                </small>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
          <button className="profile-nav-row" onClick={() => setWeeklyDigestEnabled((prev) => !prev)}>
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcFolder size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('manage_categories')}</p>
                <small>{weeklyDigestEnabled ? t('digest_on') : t('digest_off')}</small>
              </div>
            </div>
            <span className={`profile-toggle ${weeklyDigestEnabled ? 'is-on' : ''}`} />
          </button>
        </LiquidCard>

        <div className="profile-section-title">{t('data_section')}</div>
        <LiquidCard className="profile-group-card">
          <button className="profile-nav-row">
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcUpload size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('export_data')}</p>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
          <button className="profile-nav-row">
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcDoc size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('generate_report')}</p>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
          <button className="profile-nav-row">
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcShield size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('backup_restore')}</p>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
        </LiquidCard>

        <div className="profile-section-title">{t('support')}</div>
        <LiquidCard className="profile-group-card">
          <button className="profile-nav-row">
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcHelp size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('help_center')}</p>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
          <button className="profile-nav-row">
            <div className="profile-nav-main">
              <span className="profile-setting-icon"><IcCog size={15} /></span>
              <div className="profile-setting-copy">
                <p>{t('app_settings')}</p>
              </div>
            </div>
            <IcArrow size={16} className="profile-nav-arrow" />
          </button>
        </LiquidCard>

        <button className="profile-logout-btn">
          <IcLogout size={18} />
          <span>{t('logout')}</span>
        </button>

        <p className="profile-version">Version 1.0.0</p>
      </div>
    );
  };

  const currentCategoryList = entryType === 'income' ? incomeCategories : expenseCategories;
  const headerTitle =
    tab === 'home' ? t('header_home') :
    tab === 'budget' ? t('header_budget') :
    tab === 'insights' ? t('header_insights') :
    tab === 'goals' ? t('header_goals') :
    t('header_profile');
  const headerSubtitle =
    tab === 'home' ? t('header_home_sub') :
    tab === 'budget' ? t('header_budget_sub') :
    tab === 'insights' ? t('header_insights_sub') :
    tab === 'goals' ? t('header_goals_sub') :
    t('header_profile_sub');

  return (
    <div className="phone-shell">
      <div className="content">
        <div className={`header ${(tab === 'home' || tab === 'goals') ? 'header-home' : ''}`}>
          <div>
            <h2>{headerTitle}</h2>
            <small>{headerSubtitle}</small>
          </div>
          {tab === 'home' && (
            <button className="currency-chip" onClick={() => setShowCurrencyModal(true)}>
              <IcWallet size={14} />
              <span>{currency}</span>
            </button>
          )}
          {tab === 'goals' && (
            <div className="currency-chip">
              <span>{activeGoalsCount} {t('active_pockets')}</span>
            </div>
          )}
        </div>
        <Screen />
      </div>

      <div className="tab-wrap">
        <nav className="tabbar">
          {[
            { id: 'home', icon: <IcHome size={21} />, label: t('nav_home') },
            { id: 'budget', icon: <IcBudget size={21} />, label: t('nav_budget') },
            { id: 'insights', icon: <IcBrain size={21} />, label: t('nav_insights') },
            { id: 'goals', icon: <IcGoal size={21} />, label: t('nav_goals') },
            { id: 'profile', icon: <IcUser size={21} />, label: t('nav_profile') },
          ].map((item) => (
            <button key={item.id} onClick={() => setTab(item.id as Tab)} className={`tab ${tab === item.id ? 'active' : ''}`}>
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="add-pill" onClick={() => (tab === 'goals' ? setShowGoalModal(true) : setShowAddModal(true))} aria-label="Add">
          <IcPlus size={20} />
        </button>
      </div>

      <AnimatePresence>
        {showGoalModal && (
          <>
            <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowGoalModal(false)} />
            <motion.div className="modal" initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }}>
              <div className="handle" />
              <div className="row between">
                <div>
                  <h3>{t('new_goal')}</h3>
                  <small>{t('header_goals_sub')}</small>
                </div>
                <button className="ghost icon-btn" onClick={() => setShowGoalModal(false)}><IcClose size={17} /></button>
              </div>
              <div className="stack sm mt12">
                <input value={goalTitle} onChange={(e) => setGoalTitle(e.target.value)} placeholder={t('goal_name')} />
                <div className="grid two">
                  <input value={goalTarget} onChange={(e) => setGoalTarget(e.target.value)} placeholder={t('goal_target')} />
                  <input value={goalSaved} onChange={(e) => setGoalSaved(e.target.value)} placeholder={t('goal_already_saved')} />
                </div>
                <input type="date" value={goalDeadline} onChange={(e) => setGoalDeadline(e.target.value)} />
                <div className="grid two">
                  <select value={goalCategory} onChange={(e) => setGoalCategory(e.target.value as GoalCategory)}>
                    {(['Home', 'Car', 'Travel', 'Debt', 'Emergency', 'Other'] as GoalCategory[]).map((item) => (
                      <option key={item} value={item}>{t(`goal_cat_${item.toLowerCase()}` as any)}</option>
                    ))}
                  </select>
                  <select value={goalPriority} onChange={(e) => setGoalPriority(e.target.value as GoalPriority)}>
                    {(['High', 'Medium', 'Low'] as GoalPriority[]).map((item) => (
                      <option key={item} value={item}>{t(`priority_${item.toLowerCase()}` as any)}</option>
                    ))}
                  </select>
                </div>
                <input value={goalMonthly} onChange={(e) => setGoalMonthly(e.target.value)} placeholder={t('goal_monthly')} />
                <button className="save-btn" onClick={createGoal}>{t('create_goal')}</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedGoal && (
          <>
            <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedGoalId(null)} />
            <motion.div className="modal goal-detail-modal" initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }}>
              <div className="handle" />
              <div className="row between">
                <div>
                  <h3>{t('pocket_details')}</h3>
                  <small>{t(`goal_cat_${selectedGoal.category.toLowerCase()}` as any)} • {t(goalMomentumKey(selectedGoal))}</small>
                </div>
                <button className="ghost icon-btn" onClick={() => setSelectedGoalId(null)}><IcClose size={17} /></button>
              </div>

              <div className="goal-detail-head mt12">
                <div
                  className="goal-detail-icon"
                  style={{
                    backgroundColor: goalCategoryMeta(selectedGoal.category).bg,
                    color: goalCategoryMeta(selectedGoal.category).color,
                  }}
                >
                  {goalCategoryMeta(selectedGoal.category).icon}
                </div>
                <p className="goal-detail-title">{selectedGoal.title}</p>
                <small>{t(`goal_cat_${selectedGoal.category.toLowerCase()}` as any)} {t('my_pockets').toLowerCase().replace('my ', '').replace('менің ', '').replace('мои ', '')}</small>
                <div className="goal-detail-amount">{formatAmount(selectedGoal.saved)}</div>
                <div className="row between mt8">
                  <small>{t('target')} {formatAmount(selectedGoal.target)}</small>
                  <small>{goalProgress(selectedGoal)}%</small>
                </div>
                <div
                  className="bar goal-pocket-progress-bar mt8"
                  style={{
                    ['--goal-accent' as string]: goalTheme(selectedGoal).accent,
                  }}
                >
                  <span style={{ width: `${goalProgress(selectedGoal)}%` }} />
                </div>
              </div>

              <div className="goal-detail-actions mt16">
                <button className="goal-detail-action" onClick={() => openTopUpModal(selectedGoal.id)}>
                  <span className="goal-detail-action__icon"><IcPlus size={16} /></span>
                  <span>{t('add_money')}</span>
                </button>
                <button className="goal-detail-action" onClick={() => setPrimaryGoal(selectedGoal.id)}>
                  <span className="goal-detail-action__icon"><IcGoal size={16} /></span>
                  <span>{t('make_primary')}</span>
                </button>
                <button className="goal-detail-action" onClick={() => cyclePriority(selectedGoal.id)}>
                  <span className="goal-detail-action__icon"><IcArrow size={16} /></span>
                  <span>{t('goal_priority')}</span>
                </button>
              </div>

              <div className="goal-detail-list mt16">
                <div className="goal-detail-item">
                  <div>
                    <p>{t('monthly_transfer')}</p>
                    <small>{t('added_this_month')}</small>
                  </div>
                  <strong className="ok">+{formatAmount(selectedGoal.thisMonthSaved)}</strong>
                </div>
                <div className="goal-detail-item">
                  <div>
                    <p>{t('next_milestone')}</p>
                    <small>{goalNextMilestone(selectedGoal) ? `${goalNextMilestone(selectedGoal)!.percent}${t('funded')}` : t('completed')}</small>
                  </div>
                  <strong>{goalNextMilestone(selectedGoal) ? formatAmount(goalNextMilestone(selectedGoal)!.remaining) : formatAmount(0)}</strong>
                </div>
                <div className="goal-detail-item">
                  <div>
                    <p>{t('projected_finish')}</p>
                    <small>{t('at_current_pace')}</small>
                  </div>
                  <strong>{goalProjectedDateLabel(selectedGoal, lang)}</strong>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAddModal(false)} />
            <motion.div className="modal" initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }}>
              <div className="handle" />
              <div className="row between">
                <div>
                  <h3>{t('add_transaction')}</h3>
                  <small>{t('use_ai_or_fill')}</small>
                </div>
                <button className="ghost icon-btn" onClick={() => setShowAddModal(false)}><IcClose size={17} /></button>
              </div>

              {aiStep === 'methods' ? (
                <div className="stack sm mt12">
                  <button className="method liquid-method method-scan" onClick={() => { setAiStep('form'); setName('Grocery Store'); setAmount('45.5'); setCategory('Food'); setEntryType('expense'); }}>
                    <span className="method-main">
                      <span className="method-ico"><IcScan size={17} /></span>
                      <span className="method-copy">
                        <b>{t('scan_qr')}</b>
                        <small>{t('auto_detect')}</small>
                      </span>
                    </span>
                    <span className="method-meta">
                      <span className="method-badge">{t('instant')}</span>
                      <span className="method-tail"><IcArrow size={15} /></span>
                    </span>
                  </button>
                  <button className="method liquid-method method-upload" onClick={() => { setAiStep('form'); setName('Restaurant Bill'); setAmount('67.8'); setCategory('Food'); setEntryType('expense'); }}>
                    <span className="method-main">
                      <span className="method-ico"><IcUpload size={17} /></span>
                      <span className="method-copy">
                        <b>{t('upload_screenshot')}</b>
                        <small>{t('extract_from_image')}</small>
                      </span>
                    </span>
                    <span className="method-meta">
                      <span className="method-badge">{t('photo')}</span>
                      <span className="method-tail"><IcArrow size={15} /></span>
                    </span>
                  </button>
                  <button className="method liquid-method method-voice" onClick={() => { setAiStep('form'); setName('Uber ride'); setAmount('12.3'); setCategory('Transport'); setEntryType('expense'); }}>
                    <span className="method-main">
                      <span className="method-ico"><IcMic size={17} /></span>
                      <span className="method-copy">
                        <b>{t('voice_input')}</b>
                        <small>{t('convert_speech')}</small>
                      </span>
                    </span>
                    <span className="method-meta">
                      <span className="method-badge">{t('speak')}</span>
                      <span className="method-tail"><IcArrow size={15} /></span>
                    </span>
                  </button>
                  <button className="method liquid-method method-manual" onClick={() => setAiStep('form')}>
                    <span className="method-main">
                      <span className="method-ico"><IcKeyboard size={17} /></span>
                      <span className="method-copy">
                        <b>{t('enter_manually')}</b>
                        <small>{t('type_manually')}</small>
                      </span>
                    </span>
                    <span className="method-meta">
                      <span className="method-badge">{t('manual')}</span>
                      <span className="method-tail"><IcArrow size={15} /></span>
                    </span>
                  </button>
                </div>
              ) : (
                <div className="stack sm mt12">
                  <div className="income-expense-toggle">
                    <button type="button" className={entryType === 'income' ? 'ie-btn active income' : 'ie-btn income'} onClick={() => { setEntryType('income'); setCategory('Income'); }}>
                      ↙ {t('add_income')}
                    </button>
                    <button type="button" className={entryType === 'expense' ? 'ie-btn active expense' : 'ie-btn expense'} onClick={() => { setEntryType('expense'); setCategory('Food'); }}>
                      ↗ {t('add_expense')}
                    </button>
                  </div>

                  <div className="amount-view">{amount || '0'} {currency}</div>

                  <div className="quick-row">
                    <div className="quick-pill"><IcWallet size={13} /> {t('wallet')}</div>
                    <div className="quick-pill"><IcCalendar size={13} /> {t('today')}</div>
                    <div className="quick-pill">{currency}</div>
                  </div>

                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t('description')} />

                  <div className="category-strip">
                    {currentCategoryList.map((c, i) => {
                      const active = (entryType === 'income' && i === 0) || (entryType === 'expense' && category === c.id);
                      return (
                        <button
                          key={`${c.label}-${i}`}
                          type="button"
                          className={active ? 'cat-box active' : 'cat-box'}
                          onClick={() => setCategory(c.id)}
                          style={{ backgroundColor: c.bg, color: c.color }}
                        >
                          <span className="cat-ico">{c.icon}</span>
                          <span>{t(`cat_${c.id.toLowerCase()}` as any)}</span>
                        </button>
                      );
                    })}
                  </div>

                  <button className="save-btn" onClick={addTransaction}>{t('save_btn')}</button>
                  <button className="ghost wide" onClick={() => setAiStep('methods')}>{t('back_to_ai')}</button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLangModal && (
          <div className="modal-overlay" onClick={() => setShowLangModal(false)}>
            <motion.div className="modal-sheet" initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 200, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-handle" />
              <h3>{t('select_language')}</h3>
              <div className="lang-list">
                {([
                  { code: 'en' as Lang, flag: '🇺🇸', native: 'English', english: 'English' },
                  { code: 'ru' as Lang, flag: '🇷🇺', native: 'Русский', english: 'Russian' },
                  { code: 'kk' as Lang, flag: '🇰🇿', native: 'Қазақша', english: 'Kazakh' },
                ] as const).map((item) => (
                  <button
                    key={item.code}
                    className={`lang-item ${lang === item.code ? 'lang-item--active' : ''}`}
                    onClick={() => {
                      setLang(item.code);
                      setShowLangModal(false);
                    }}
                  >
                    <span className="lang-flag">{item.flag}</span>
                    <div className="lang-copy">
                      <p>{item.native}</p>
                      <small>{item.english}</small>
                    </div>
                    {lang === item.code && <span className="lang-check">✓</span>}
                  </button>
                ))}
              </div>
              <button className="modal-cancel" onClick={() => setShowLangModal(false)}>{t('cancel')}</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCurrencyModal && (
          <div className="modal-overlay" onClick={() => setShowCurrencyModal(false)}>
            <motion.div className="modal-sheet" initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 200, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-handle" />
              <h3>{t('select_currency')}</h3>
              <div className="lang-list">
                {([
                  { code: 'KZT' as Currency, symbol: '₸', name: 'Kazakhstani Tenge', label: 'KZT' },
                  { code: 'USD' as Currency, symbol: '$', name: 'US Dollar', label: 'USD' },
                  { code: 'RUB' as Currency, symbol: '₽', name: 'Russian Ruble', label: 'RUB' },
                ] as const).map((item) => (
                  <button
                    key={item.code}
                    className={`lang-item ${currency === item.code ? 'lang-item--active' : ''}`}
                    onClick={() => {
                      setCurrency(item.code);
                      setShowCurrencyModal(false);
                    }}
                  >
                    <span className="lang-flag" style={{ fontSize: '22px' }}>{item.symbol}</span>
                    <div className="lang-copy">
                      <p>{item.label}</p>
                      <small>{item.name}</small>
                    </div>
                    {currency === item.code && <span className="lang-check">✓</span>}
                  </button>
                ))}
              </div>
              <button className="modal-cancel" onClick={() => setShowCurrencyModal(false)}>{t('cancel')}</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTopUpModal && (
          <div className="modal-overlay" onClick={closeTopUpModal}>
            <motion.div className="modal-sheet" initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 200, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-handle" />
              <div className="modal-header">
                <div className="grow">
                  <h3>{t('top_up')}</h3>
                  <p className="modal-subtitle">{t('top_up_subtitle')}</p>
                </div>
                <button className="modal-close" onClick={closeTopUpModal}><IcClose size={18} /></button>
              </div>

              {/* Amount Field */}
              <div className="amount-field">
                <span className="amount-symbol">
                  {currency === 'KZT' ? '₸' : currency === 'USD' ? '$' : '₽'}
                </span>
                <input
                  type="number"
                  placeholder="0"
                  value={topUpAmount}
                  onChange={(e) => setTopUpAmount(e.target.value)}
                  className="amount-input"
                  autoFocus
                />
              </div>

              {/* Quick Amounts */}
              <p className="quick-label">{t('quick_amounts')}</p>
              <div className="quick-chips">
                {[1000, 5000, 10000, 50000].map((v) => (
                  <button key={v} className="quick-chip" onClick={() => setTopUpAmount(String(v))}>
                    {v.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Select Goal */}
              <p className="quick-label">{t('select_goal')}</p>
              <div className="goal-select-list">
                <button
                  className={`goal-select-item ${topUpGoalId === null ? 'goal-select-item--active' : ''}`}
                  onClick={() => setTopUpGoalId(null)}
                >
                  — {t('no_goal')}
                </button>
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    className={`goal-select-item ${topUpGoalId === goal.id ? 'goal-select-item--active' : ''}`}
                    onClick={() => setTopUpGoalId(goal.id)}
                  >
                    {goalCategoryMeta(goal.category).icon} {goal.title}
                  </button>
                ))}
              </div>

              <button className="primary-btn" onClick={confirmTopUp}>{t('confirm_top_up')}</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
