interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image?: string
}

export default function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
      <div className="mb-6 text-teal-500">
        <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="mb-8 text-gray-700 italic leading-relaxed flex-grow">{quote}</p>
      <div className="flex items-center mt-auto">
        {image && (
          <div className="mr-4">
            <img src={image} alt={author} className="h-12 w-12 rounded-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-sm text-teal-600">{role}</p>
        </div>
      </div>
    </div>
  )
}
