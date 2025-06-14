export function formatTanggalIndonesia(isoDate: string): string {
  const tanggal: Date = new Date(isoDate);

  const bulanIndonesia: string[] = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const hari: number = tanggal.getUTCDate();
  const bulan: string = bulanIndonesia[tanggal.getUTCMonth()];
  const tahun: number = tanggal.getUTCFullYear();

  return `${hari} ${bulan}, ${tahun}`;
}
