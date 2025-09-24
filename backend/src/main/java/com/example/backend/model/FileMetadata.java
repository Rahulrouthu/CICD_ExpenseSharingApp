package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity
public class FileMetadata extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long file_id;

    private String fileName;
    private long fileSize;

    @Lob
    // Use LONGBLOB to support large files (up to ~4GB); safer for 5MB images than MySQL BLOB (64KB)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] fileContent; // Store the file content as a byte array in the database
}
