import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const healthMetrics = [
    { label: 'Энергия', value: 75, color: 'bg-accent' },
    { label: 'Сон', value: 60, color: 'bg-primary' },
    { label: 'Настроение', value: 85, color: 'bg-accent' },
    { label: 'Питание', value: 70, color: 'bg-primary' }
  ];

  const educationalMaterials = [
    {
      title: 'Основы интегративной медицины',
      category: 'Философия',
      duration: '15 мин',
      icon: 'BookOpen'
    },
    {
      title: 'Питание и энергия',
      category: 'Нутрициология',
      duration: '20 мин',
      icon: 'Apple'
    },
    {
      title: 'Управление стрессом',
      category: 'Психосоматика',
      duration: '12 мин',
      icon: 'Brain'
    },
    {
      title: 'Восстановительные практики',
      category: 'Wellness',
      duration: '18 мин',
      icon: 'Heart'
    }
  ];

  const treatmentPrograms = [
    {
      name: 'Базовая программа детоксикации',
      status: 'active',
      progress: 45,
      nextStep: 'Консультация по питанию'
    },
    {
      name: 'Коррекция микробиома',
      status: 'planned',
      progress: 0,
      nextStep: 'Анализы и диагностика'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/7d6d9de5-861c-4ae2-ba92-12eebc5450cf.png" 
              alt="Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold leading-none text-primary">Качество жизни</h1>
              <p className="text-xs text-secondary">Красиво и легко</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('education')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'education' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Материалы
            </button>
            <button
              onClick={() => setActiveSection('diary')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'diary' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Дневник
            </button>
            <button
              onClick={() => setActiveSection('programs')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'programs' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Программы
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'contact' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Контакты
            </button>
          </nav>
          <Button size="sm" className="hidden md:flex">
            <Icon name="Calendar" className="mr-2 h-4 w-4" />
            Записаться
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="animate-fade-in space-y-8">
            <section className="rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/20 to-background p-8 md:p-12 shadow-lg">
              <div className="max-w-3xl">
                <Badge className="mb-4 rounded-full bg-primary px-4 py-1 text-white shadow-md">Интегративный подход</Badge>
                <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                  Ваше здоровье — наш приоритет
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Комплексное сопровождение на пути к здоровью через синтез традиционной и современной медицины
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full shadow-lg" onClick={() => setActiveSection('programs')}>
                    Начать программу
                    <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full" onClick={() => setActiveSection('education')}>
                    Узнать больше
                  </Button>
                </div>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
              <Card className="rounded-3xl border-border/40 shadow-md transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15">
                    <Icon name="Stethoscope" className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>Персонализация</CardTitle>
                  <CardDescription>
                    Индивидуальные протоколы лечения, разработанные специально для вас
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-3xl border-border/40 shadow-md transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/30">
                    <Icon name="Activity" className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>Мониторинг</CardTitle>
                  <CardDescription>
                    Постоянное отслеживание показателей здоровья и прогресса
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="rounded-3xl border-border/40 shadow-md transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15">
                    <Icon name="Users" className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>Поддержка</CardTitle>
                  <CardDescription>
                    Команда специалистов всегда на связи для ответов на вопросы
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>

            <Card className="rounded-3xl border-border/40 shadow-md">
              <CardHeader>
                <CardTitle>Ваши показатели здоровья</CardTitle>
                <CardDescription>Отслеживайте динамику ключевых параметров</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {healthMetrics.map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{metric.label}</span>
                      <span className="text-sm text-muted-foreground">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-3 rounded-full" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'education' && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Образовательные материалы</h2>
              <p className="text-muted-foreground">
                Изучайте основы интегративной медицины и расширяйте знания о здоровье
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">Все материалы</TabsTrigger>
                <TabsTrigger value="philosophy">Философия</TabsTrigger>
                <TabsTrigger value="nutrition">Нутрициология</TabsTrigger>
                <TabsTrigger value="wellness">Wellness</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {educationalMaterials.map((material) => (
                    <Card key={material.title} className="transition-all hover:shadow-lg">
                      <CardHeader>
                        <div className="mb-3 flex items-start justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <Icon name={material.icon as any} className="h-6 w-6 text-primary" />
                          </div>
                          <Badge variant="outline">{material.category}</Badge>
                        </div>
                        <CardTitle className="text-xl">{material.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="Clock" className="h-4 w-4" />
                          {material.duration}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">
                          Начать изучение
                          <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
                <CardDescription>Ответы на популярные вопросы об интегративной медицине</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Что такое интегративная медицина?</AccordionTrigger>
                    <AccordionContent>
                      Интегративная медицина объединяет лучшие подходы традиционной и доказательной медицины,
                      фокусируясь на целостном подходе к здоровью человека — физическом, эмоциональном и духовном.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Как долго длится программа лечения?</AccordionTrigger>
                    <AccordionContent>
                      Продолжительность программы индивидуальна и зависит от ваших целей и состояния здоровья.
                      Обычно базовые программы рассчитаны на 3-6 месяцев с возможностью корректировки.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Нужны ли дополнительные обследования?</AccordionTrigger>
                    <AccordionContent>
                      Мы проводим комплексную диагностику на старте программы, включающую лабораторные анализы,
                      функциональные тесты и оценку образа жизни для создания персонализированного протокола.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'diary' && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Дневник здоровья</h2>
              <p className="text-muted-foreground">Отслеживайте свое самочувствие и прогресс каждый день</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="h-5 w-5 text-accent" />
                    Сегодняшние показатели
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {healthMetrics.map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{metric.label}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={metric.value} className="h-2 w-24" />
                        <span className="text-sm font-bold text-primary">{metric.value}%</span>
                      </div>
                    </div>
                  ))}
                  <Button className="mt-4 w-full" variant="outline">
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Добавить запись
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" className="h-5 w-5 text-primary" />
                    Недельная динамика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => (
                      <div key={day} className="flex items-center gap-3">
                        <span className="w-8 text-sm font-medium text-muted-foreground">{day}</span>
                        <Progress value={60 + Math.random() * 30} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>История записей</CardTitle>
                <CardDescription>Последние записи в вашем дневнике</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: '24 ноября 2025',
                      note: 'Отличное самочувствие после утренней прогулки',
                      mood: 'positive'
                    },
                    {
                      date: '23 ноября 2025',
                      note: 'Небольшая усталость, скорректировал режим сна',
                      mood: 'neutral'
                    },
                    {
                      date: '22 ноября 2025',
                      note: 'Начал новую программу питания, много энергии',
                      mood: 'positive'
                    }
                  ].map((entry, index) => (
                    <div key={index} className="flex items-start gap-4 rounded-lg border p-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          entry.mood === 'positive' ? 'bg-accent/10' : 'bg-muted'
                        }`}
                      >
                        <Icon
                          name={entry.mood === 'positive' ? 'Smile' : 'Meh'}
                          className={`h-5 w-5 ${entry.mood === 'positive' ? 'text-accent' : 'text-muted-foreground'}`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{entry.note}</p>
                        <p className="text-xs text-muted-foreground">{entry.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'programs' && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Программы лечения</h2>
              <p className="text-muted-foreground">Индивидуальные протоколы для достижения ваших целей</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {treatmentPrograms.map((program) => (
                <Card key={program.name} className="relative overflow-hidden">
                  {program.status === 'active' && (
                    <div className="absolute right-4 top-4">
                      <Badge className="bg-accent text-white">Активна</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{program.name}</CardTitle>
                    <CardDescription>Следующий шаг: {program.nextStep}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Прогресс</span>
                        <span className="font-medium">{program.progress}%</span>
                      </div>
                      <Progress value={program.progress} className="h-2" />
                    </div>
                    <Button className="w-full" variant={program.status === 'active' ? 'default' : 'outline'}>
                      {program.status === 'active' ? 'Продолжить' : 'Начать программу'}
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" className="h-5 w-5 text-primary" />
                  Создать новую программу
                </CardTitle>
                <CardDescription>
                  Запишитесь на консультацию для разработки персонализированного протокола
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="w-full md:w-auto">
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Контакты и связь</h2>
              <p className="text-muted-foreground">Мы всегда на связи для ответов на ваши вопросы</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Выберите удобный способ коммуникации</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Phone" className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Телефон</div>
                      <div className="text-xs text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Mail" className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-xs text-muted-foreground">info@integramed.ru</div>
                    </div>
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="MessageCircle" className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Telegram</div>
                      <div className="text-xs text-muted-foreground">@integramed_support</div>
                    </div>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Часы работы</CardTitle>
                  <CardDescription>График работы нашей клиники</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm text-muted-foreground">Понедельник - Пятница</span>
                    <span className="text-sm font-medium">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm text-muted-foreground">Суббота</span>
                    <span className="text-sm font-medium">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-sm text-muted-foreground">Воскресенье</span>
                    <span className="text-sm font-medium">Выходной</span>
                  </div>
                  <div className="mt-4 rounded-lg bg-accent/10 p-3">
                    <p className="text-sm text-accent">
                      <Icon name="Info" className="mr-1 inline h-4 w-4" />
                      Экстренная связь доступна 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Адрес клиники</CardTitle>
                <CardDescription>Где нас найти</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">г. Москва, ул. Здоровья, д. 10</p>
                    <p className="text-sm text-muted-foreground">5 минут от метро "Медицинская"</p>
                    <Button className="mt-4" variant="outline">
                      <Icon name="Navigation" className="mr-2 h-4 w-4" />
                      Построить маршрут
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Icon name="Heart" className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold">IntegraMed</span>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © 2025 IntegraMed. Платформа интегративной медицины
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Youtube" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;