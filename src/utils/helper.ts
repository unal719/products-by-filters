export const mapImagesLink = (links: string) => {

    return links.split(",").map((link: string) => link.replaceAll(" ", "")) || [];
}

export const calculateTotalPages = (itemsLength: number) => {
    const totalPage = Math.trunc(itemsLength / 100) + 1;
    const totalPageItems = [];
    for (let index = 1; index <= totalPage; index++) {
        totalPageItems.push(`${index}`)
    }
    return totalPageItems;
}