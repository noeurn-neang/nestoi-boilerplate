export const paginateArray = (items: any[], page: number, pageSize: number) => {
  const totalCount = items.length;
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalCount);

  const paginatedData = items.slice(startIndex, endIndex);

  return {
    paginatedData,
    pagination: {
      total: totalCount,
      page,
      pageSize,
    },
  };
};
