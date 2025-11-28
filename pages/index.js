import Head from 'next/head';
import Image from 'next/image';
import { ShoppingCart, Package, Monitor, DollarSign, ExternalLink } from 'lucide-react';

export default function PortalPage() {
  
  // Configuração dos Sistemas (Links e Ícones)
  const sistemas = [
    {
      titulo: "Solicitação de Compras",
      descricao: "Requisição de materiais, serviços e insumos para os setores.",
      link: "https://solicitacao-compras.vercel.app/",
      icone: <ShoppingCart className="w-8 h-8 text-white" />,
      cor: "bg-emerald-600", // Verde
      hover: "hover:border-emerald-500",
      text: "text-emerald-700 dark:text-emerald-400"
    },
    {
      titulo: "Almoxarifado",
      descricao: "Pedidos de materiais de escritório, embalagens e itens de estoque.",
      link: "https://requisicao-almoxarifado.vercel.app/",
      icone: <Package className="w-8 h-8 text-white" />,
      cor: "bg-blue-600", // Azul
      hover: "hover:border-blue-500",
      text: "text-blue-700 dark:text-blue-400"
    },
    {
      titulo: "Ativo Fixo",
      descricao: "Solicitação de movimentação, baixa ou aquisição de bens patrimoniais.",
      link: "https://ativo-fixo.vercel.app/",
      icone: <Monitor className="w-8 h-8 text-white" />,
      cor: "bg-purple-600", // Roxo
      hover: "hover:border-purple-500",
      text: "text-purple-700 dark:text-purple-400"
    },
    {
      titulo: "Financeiro",
      descricao: "Solicitação de pagamentos, reembolsos de despesas e adiantamentos.",
      link: "https://requisicao-financeira.vercel.app/",
      icone: <DollarSign className="w-8 h-8 text-white" />,
      cor: "bg-cyan-700", // Ciano Escuro (Padrão Maglog)
      hover: "hover:border-cyan-600",
      text: "text-cyan-800 dark:text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans transition-colors duration-300">
      <Head>
        <title>Central de Solicitações - Maglog</title>
        <meta name="description" content="Portal de acesso aos sistemas internos Maglog" />
      </Head>

      {/* --- CABEÇALHO --- */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            {/* Certifique-se de ter o logo.png na pasta public */}
            <Image src="/logo.png" alt="Maglog" width={160} height={50} priority className="h-auto" />
          </div>
          <div className="text-center sm:text-right">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Central de Solicitações</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">O que você precisa solicitar hoje?</p>
          </div>
        </div>
      </header>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {sistemas.map((sistema, index) => (
            <a 
              key={index} 
              href={sistema.link}
              target="_blank" // Abre em nova aba (opcional, remova se quiser na mesma)
              rel="noopener noreferrer"
              className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent ${sistema.hover} overflow-hidden flex flex-col`}
            >
              {/* Topo Colorido com Ícone */}
              <div className={`${sistema.cor} p-6 flex justify-center items-center transition-colors`}>
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  {sistema.icone}
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${sistema.text}`}>
                    {sistema.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {sistema.descricao}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors">
                  <span>Acessar Sistema</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* --- RODAPÉ DE AJUDA --- */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Precisa de ajuda ou acesso? Entre em contato com o suporte de TI.
          </p>
          <p className="text-gray-400 dark:text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} Maglog Transportes e Logística
          </p>
        </div>

      </main>
    </div>
  );
}