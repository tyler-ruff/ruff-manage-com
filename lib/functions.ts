export function formatTelephone(phoneNumber: string){
    // Remove the '+' and any non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned number has the correct length (11 digits for +Xxxxxxxxxxx)
    if (cleaned.length !== 11) {
        throw new Error('Invalid phone number length. Expected 11 digits.');
    }

    // Extract the country code and the rest of the number
    const countryCode = cleaned.charAt(0); // Assuming the first digit is the country code
    const localNumber = cleaned.slice(1); // The remaining 10 digits

    // Format the local number
    const areaCode = localNumber.slice(0, 3);
    const centralOfficeCode = localNumber.slice(3, 6);
    const lineNumber = localNumber.slice(6, 10);

    // Return the formatted number including the country code
    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

export function truncateString(input: string, maxLength: number = 255){
    if(input.length <= maxLength){
        return input;
    }
    const result = input.substring(0,maxLength);
    return `${result}...`;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]; // Create a copy to avoid modifying the original

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}