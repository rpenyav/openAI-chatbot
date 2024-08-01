import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const ortographyCheckUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
        Te serán proveidos textos en español con posibles errores ortográficos y gramaticales.
        Las palabras usadas deben existir en el diccionario de la Real Academia Española.
        Debes responder en formato JSON,
        tu tarea es corregirlos y retornar información y soluciones,
        también debes dar un porcentaje de aciertos por parte del usuario.
        Si no hay errores, debes retornar un mensaje de felicitación.
        Ejemlpo de salida:
        {
        userScore:number,
        errors: string[], // ['error -> solucion']
        message: string, // Usa emojis y texto para felicitar
        }
        `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.3,
    max_tokens: 150,
    response_format: {
      type: 'json_object',
    },
  });
  const jsonResponse = JSON.parse(completion.choices[0].message.content);
  return jsonResponse;
};
