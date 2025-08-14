import { Card } from "@/components/ui/card";

type Collaboration = {
  title: string;
  subtitle?: string;
  taskLabel?: string;
  task: string;
  resultLabel?: string;
  result: string;
  image: string;
};

const collaborations: Collaboration[] = [
  {
    title: "SABR",
    subtitle:
      "Самый большой в России монобрендовый магазин сегмента modest fashion",
    taskLabel: "Задача",
    task:
      "Создать линию, серию товаров Yertu collection в сотрудничестве с SABR",
    resultLabel: "Результат",
    result:
      "Успешный релиз коллекции и большая любовь покупателей к совместным изделиям",
    image: "/placeholder.svg",
  },
  {
    title: "JANNAT GOURMET",
    subtitle: "Сладости",
    taskLabel: "Задача",
    task: "Придумать оригинальную упаковку для продукции",
    resultLabel: "Результат",
    result:
      "Создано несколько дизайнерских решений. Фирменные паттерны и упаковка подчеркнули премиальный характер бренда",
    image: "/placeholder.svg",
  },
  {
    title: "РОСПИСЬ НА СТАРОТАТАРСКОМ",
    subtitle: "Студия дизайна интерьера и архитектуры ‘IMBASE’",
    taskLabel: "Задача",
    task: "Расписать лестницу и стену в новых зонах",
    resultLabel: "Результат",
    result:
      "Заказчик повысил узнаваемость пространства, а посетители делятся фото на историческом фоне",
    image: "/placeholder.svg",
  },
  {
    title: "DUBAI GIRLS CLUB",
    subtitle: "Hidden cafe, Dubai",
    taskLabel: "Задача",
    task: "Создать предметы с киреемской вязью",
    resultLabel: "Результат",
    result:
      "Коллаборация привела к появлению линейки сумок и аксессуаров, отмеченных гостями как ‘особенные и стильные’",
    image: "/placeholder.svg",
  },
];

const CollaborationsSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "hsl(45 20% 95%)" }}>
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-8 text-foreground">
          КОЛЛАБОРАЦИИ
        </h2>

        <div className="space-y-6">
          {collaborations.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <Card
                key={item.title}
                className="border border-border rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div
                    className={[
                      "relative h-56 md:h-64 lg:h-72",
                      isEven ? "md:order-1" : "md:order-2",
                    ].join(" ")}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={[
                      "flex flex-col justify-center p-6 md:p-8 bg-card",
                      isEven ? "md:order-2" : "md:order-1",
                    ].join(" ")}
                  >
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="text-sm leading-relaxed space-y-2">
                        <p>
                          <span className="font-medium text-foreground">
                            {item.taskLabel || "Задача"}:
                          </span>{" "}
                          <span className="text-muted-foreground">{item.task}</span>
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            {item.resultLabel || "Результат"}:
                          </span>{" "}
                          <span className="text-muted-foreground">{item.result}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
