import React from 'react';

const DataTable = ({ title, columns, rows, note }) => {
  return (
    <div className="w-full bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
      {title && (
        <h2 className="text-xl sm:text-2xl font-semibold text-[#7B5E42] mb-4">
          {title}
        </h2>
      )}

      <div className="w-full overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-[#F9F6F2] text-left text-[#4B3B2A]">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-2 sm:px-4 py-2 font-medium border-b text-sm sm:text-base break-words"
                  style={{ minWidth: '120px' }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="text-gray-700">
                {columns.map((col, cIdx) => (
                  <td
                    key={cIdx}
                    className="px-2 sm:px-4 py-3 border-b align-top text-sm sm:text-base break-words whitespace-pre-line"
                  >
                    {row[col] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && (
        <p className="mt-4 text-sm text-gray-500 italic">{note}</p>
      )}
    </div>
  );
};

export default DataTable;