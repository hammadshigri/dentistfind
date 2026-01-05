interface CardHeaderProps {
  name: string;
  city: string;
  country: string;
}

/**
 * CardHeader component displays practice name, city, and country
 * Practice name has strong visual hierarchy (larger, bolder text)
 */
export const CardHeader = ({ name, city, country }: CardHeaderProps) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
      <p className="text-sm text-gray-600">
        {city}, {country}
      </p>
    </div>
  );
};
