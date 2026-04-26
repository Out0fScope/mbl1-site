const reviews = [
  {
    name: 'Анна Смирнова',
    text: 'Очень довольна качеством. Диван выглядит даже лучше, чем на фото, и невероятно удобный.',
  },
  {
    name: 'Игорь Волков',
    text: 'Заказывали стол и стулья — всё пришло идеально. Видно внимание к деталям.',
  },
  {
    name: 'Мария Кузнецова',
    text: 'Минималистичный дизайн и отличные материалы. Интерьер сразу стал выглядеть дороже.',
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="cursor-default scroll-mt-48 px-4 sm:px-12 lg:px-16 xl:px-24">
      <div className="h-full flex justify-between flex-col">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <h2 className="text-lg uppercase tracking-widest text-foreground">Отзывы</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 border hover:shadow-md transition">
              {/* Text */}
              <p className="text-neutral-700 leading-relaxed mb-6">“{review.text}”</p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center text-sm font-medium text-neutral-600">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">{review.name}</p>
                  <p className="text-xs text-neutral-500">Покупатель</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
