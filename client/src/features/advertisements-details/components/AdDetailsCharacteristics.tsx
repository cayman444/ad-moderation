export const AdDetailsCharacteristics = ({
  characteristics,
}: {
  characteristics?: Record<string, string>;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium text-xl">Характеристики</h4>
      <table>
        <tbody>
          {Object.entries(characteristics ?? {}).map(([key, value]) => (
            <tr key={key} className="border-b [&>td]:w-1/2 [&>td]:p-2">
              <td>{key}</td>
              <td className="font-medium">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
