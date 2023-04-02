import { SECRET_OPENAI_API_KEY } from '$env/static/private'
import { Configuration, OpenAIApi } from 'openai';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const openai = new OpenAIApi(new Configuration ({
        apiKey: SECRET_OPENAI_API_KEY
    }));

    const res = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {role:'user', content: url.searchParams.get('prompt')}
        ]
    });

    return json({body: res.data.choices[0].message.content});
}