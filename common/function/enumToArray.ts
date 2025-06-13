export function enumToArray<T extends object>(enumObj: T): { label: string; value: string }[] {
    return Object.keys(enumObj).map((key) => ({
      label: enumObj[key as keyof T] as string,
      value: key.toLowerCase(),
    }));
  }