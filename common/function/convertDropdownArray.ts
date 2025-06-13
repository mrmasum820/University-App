interface convertData<T> {
  dataSource: T[];
  keyName?: { label: string; value: string | number };
}
export const convertDropdownArray = <T extends Record<string, any>>({
  dataSource,
  keyName,
}: convertData<T>) => {
  return dataSource?.map((val: T) => {
    return {
      label: keyName ? val[keyName.label] : (val as any).name,
      value: keyName ? val[keyName.value] : (val as any).id,
    };
  });
};
